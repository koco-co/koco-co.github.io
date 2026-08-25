(() => {
  'use strict';

  const NAV_ID = 'hfc-sync-nav';
  let panelObserver = null;

  function getPanel() {
    return document.querySelector('[data-hfc-sync]');
  }

  function getNav() {
    return document.getElementById(NAV_ID);
  }

  function removeNav() {
    panelObserver?.disconnect();
    panelObserver = null;
    getNav()?.remove();
  }

  function createNav() {
    const nav = document.createElement('div');
    nav.id = NAV_ID;
    nav.className = 'hfc-sync-nav';
    nav.innerHTML = `
      <button class="site-page hfc-sync-nav__trigger" type="button" aria-haspopup="true" aria-expanded="false">
        <i class="fab fa-github" aria-hidden="true"></i>
        <span data-hfc-sync-nav-label>登录</span>
      </button>
      <div class="hfc-sync-nav__popover" data-hfc-sync-nav-popover hidden>
        <span class="hfc-sync-nav__status" data-hfc-sync-nav-status>未登录，进度仅保存在此浏览器</span>
        <div class="hfc-sync-nav__actions">
          <button class="hfc-sync-nav__action" type="button" data-hfc-sync-nav-logout hidden>退出登录</button>
        </div>
      </div>`;

    const trigger = nav.querySelector('.hfc-sync-nav__trigger');
    const popover = nav.querySelector('[data-hfc-sync-nav-popover]');

    trigger.addEventListener('click', () => {
      const panel = getPanel();
      const login = panel?.querySelector('[data-hfc-login]');
      if (login && !login.hidden) {
        login.click();
        return;
      }

      const opening = popover.hidden;
      popover.hidden = !opening;
      trigger.setAttribute('aria-expanded', String(opening));
    });

    nav.querySelector('[data-hfc-sync-nav-logout]').addEventListener('click', () => {
      getPanel()?.querySelector('[data-hfc-logout]')?.click();
      popover.hidden = true;
      trigger.setAttribute('aria-expanded', 'false');
    });

    return nav;
  }

  function syncNavState() {
    const panel = getPanel();
    const nav = getNav();
    if (!panel || !nav) return;

    const state = panel.dataset.hfcSyncState || 'local';
    const status = panel.querySelector('[data-hfc-sync-status]')?.textContent?.trim() || '复习进度同步';
    const login = panel.querySelector('[data-hfc-login]');
    const logout = panel.querySelector('[data-hfc-logout]');
    const authenticated = Boolean(login?.hidden);
    const labelByState = {
      authorizing: '登录中',
      loading: '同步中',
      syncing: '同步中',
      synced: '已同步',
      offline: '待同步',
      error: '同步失败'
    };

    nav.dataset.hfcSyncState = state;
    nav.querySelector('[data-hfc-sync-nav-label]').textContent = authenticated
      ? (labelByState[state] || '云同步')
      : '登录';
    nav.querySelector('[data-hfc-sync-nav-status]').textContent = status;
    nav.querySelector('[data-hfc-sync-nav-logout]').hidden = logout?.hidden !== false;

    const icon = nav.querySelector('i');
    icon.className = authenticated ? 'fas fa-cloud' : 'fab fa-github';
  }

  function mount() {
    const panel = getPanel();
    const menus = document.getElementById('menus');
    if (!panel || !menus) {
      removeNav();
      return;
    }

    let nav = getNav();
    if (!nav) {
      nav = createNav();
      menus.appendChild(nav);
    }

    panelObserver?.disconnect();
    panelObserver = new MutationObserver(syncNavState);
    panelObserver.observe(panel, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ['data-hfc-sync-state', 'hidden']
    });
    syncNavState();
  }

  document.addEventListener('click', event => {
    const nav = getNav();
    if (!nav || nav.contains(event.target)) return;
    const popover = nav.querySelector('[data-hfc-sync-nav-popover]');
    const trigger = nav.querySelector('.hfc-sync-nav__trigger');
    if (popover) popover.hidden = true;
    trigger?.setAttribute('aria-expanded', 'false');
  });

  document.addEventListener('DOMContentLoaded', mount);
  document.addEventListener('pjax:complete', () => window.setTimeout(mount, 0));
})();
