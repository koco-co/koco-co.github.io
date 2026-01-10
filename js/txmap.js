// //get请求
// $.ajax({
//     type: 'get',
//     url: 'https://apis.map.qq.com/ws/location/v1/ip',
//     data: {
//         key: 'OANBZ-WGOC7-W4LXH-POSPC-F7HST-OTFQV',
//         output: 'jsonp',
//     },
//     dataType: 'jsonp',
//     success: function (res) {
//         ipLoacation = res;
//     }
// })
//
// function getDistance(e1, n1, e2, n2) {
//     const R = 6371
//     const {sin, cos, asin, PI, hypot} = Math
//     let getPoint = (e, n) => {
//         e *= PI / 180
//         n *= PI / 180
//         return {x: cos(n) * cos(e), y: cos(n) * sin(e), z: sin(n)}
//     }
//
//     let a = getPoint(e1, n1)
//     let b = getPoint(e2, n2)
//     let c = hypot(a.x - b.x, a.y - b.y, a.z - b.z)
//     let r = asin(c / 2) * 2 * R
//     return Math.round(r);
// }
//
// function showWelcome() {
//
//     let dist = getDistance(120.02, 30.27, ipLoacation.result.location.lng, ipLoacation.result.location.lat); //这里换成自己的经纬度
//     let pos = ipLoacation.result.ad_info.nation;
//     let ip;
//     let posdesc;
//     //根据国家、省份、城市信息自定义欢迎语
//     switch (ipLoacation.result.ad_info.nation) {
//         case "日本":
//             posdesc = "よろしく，一起去看樱花吗";
//             break;
//         case "美国":
//             posdesc = "Let us live in peace!";
//             break;
//         case "英国":
//             posdesc = "想同你一起夜乘伦敦眼";
//             break;
//         case "俄罗斯":
//             posdesc = "干了这瓶伏特加！";
//             break;
//         case "法国":
//             posdesc = "C'est La Vie";
//             break;
//         case "德国":
//             posdesc = "Die Zeit verging im Fluge.";
//             break;
//         case "澳大利亚":
//             posdesc = "一起去大堡礁吧！";
//             break;
//         case "加拿大":
//             posdesc = "拾起一片枫叶赠予你";
//             break;
//         case "中国":
//             pos = ipLoacation.result.ad_info.province + " " + ipLoacation.result.ad_info.city + " " + ipLoacation.result.ad_info.district;
//             ip = ipLoacation.result.ip;
//             switch (ipLoacation.result.ad_info.province) {
//                 case "北京市":
//                     posdesc = "北——京——欢迎你~~~";
//                     break;
//                 case "天津市":
//                     posdesc = "讲段相声吧。";
//                     break;
//                 case "河北省":
//                     posdesc = "山势巍巍成壁垒，天下雄关。铁马金戈由此向，无限江山。";
//                     break;
//                 case "山西省":
//                     posdesc = "展开坐具长三尺，已占山河五百余。";
//                     break;
//                 case "内蒙古自治区":
//                     posdesc = "天苍苍，野茫茫，风吹草低见牛羊。";
//                     break;
//                 case "辽宁省":
//                     posdesc = "我想吃烤鸡架！";
//                     break;
//                 case "吉林省":
//                     posdesc = "状元阁就是东北烧烤之王。";
//                     break;
//                 case "黑龙江省":
//                     posdesc = "很喜欢哈尔滨大剧院。";
//                     break;
//                 case "上海市":
//                     posdesc = "众所周知，中国只有两个城市。";
//                     break;
//                 case "江苏省":
//                     switch (ipLoacation.result.ad_info.city) {
//                         case "南京市":
//                             posdesc = "这是我挺想去的城市啦。";
//                             break;
//                         case "苏州市":
//                             posdesc = "上有天堂，下有苏杭。";
//                             break;
//                         default:
//                             posdesc = "散装是必须要散装的。";
//                             break;
//                     }
//                     break;
//                 case "浙江省":
//                     posdesc = "东风渐绿西湖柳，雁已还人未南归。";
//                     break;
//                 case "河南省":
//                     switch (ipLoacation.result.ad_info.city) {
//                         case "郑州市":
//                             posdesc = "豫州之域，天地之中。";
//                             break;
//                         case "南阳市":
//                             posdesc = "臣本布衣，躬耕于南阳。此南阳非彼南阳！";
//                             break;
//                         case "驻马店市":
//                             posdesc = "峰峰有奇石，石石挟仙气。嵖岈山的花很美哦！";
//                             break;
//                         case "开封市":
//                             posdesc = "刚正不阿包青天。";
//                             break;
//                         case "洛阳市":
//                             posdesc = "洛阳牡丹甲天下。";
//                             break;
//                         default:
//                             posdesc = "可否带我品尝河南烩面啦？";
//                             break;
//                     }
//                     break;
//                 case "安徽省":
//                     posdesc = "蚌埠住了，芜湖起飞。";
//                     break;
//                 case "福建省":
//                     posdesc = "井邑白云间，岩城远带山。";
//                     break;
//                 case "江西省":
//                     posdesc = "落霞与孤鹜齐飞，秋水共长天一色。";
//                     break;
//                 case "山东省":
//                     posdesc = "遥望齐州九点烟，一泓海水杯中泻。";
//                     break;
//                 case "湖北省":
//                     posdesc = "来碗热干面！";
//                     break;
//                 case "湖南省":
//                     posdesc = "74751，长沙斯塔克。";
//                     break;
//                 case "广东省":
//                     posdesc = "老板来两斤福建人。";
//                     break;
//                 case "广西壮族自治区":
//                     posdesc = "桂林山水甲天下。";
//                     break;
//                 case "海南省":
//                     posdesc = "朝观日出逐白浪，夕看云起收霞光。";
//                     break;
//                 case "四川省":
//                     posdesc = "康康川妹子。";
//                     break;
//                 case "贵州省":
//                     posdesc = "茅台，学生，再塞200。";
//                     break;
//                 case "云南省":
//                     posdesc = "玉龙飞舞云缠绕，万仞冰川直耸天。";
//                     break;
//                 case "西藏自治区":
//                     posdesc = "躺在茫茫草原上，仰望蓝天。";
//                     break;
//                 case "陕西省":
//                     posdesc = "来份臊子面加馍。";
//                     break;
//                 case "甘肃省":
//                     posdesc = "羌笛何须怨杨柳，春风不度玉门关。";
//                     break;
//                 case "青海省":
//                     posdesc = "牛肉干和老酸奶都好好吃。";
//                     break;
//                 case "宁夏回族自治区":
//                     posdesc = "大漠孤烟直，长河落日圆。";
//                     break;
//                 case "新疆维吾尔自治区":
//                     posdesc = "驼铃古道丝绸路，胡马犹闻唐汉风。";
//                     break;
//                 case "台湾省":
//                     posdesc = "我在这头，大陆在那头。";
//                     break;
//                 case "香港特别行政区":
//                     posdesc = "永定贼有残留地鬼嚎，迎击光非岁玉。";
//                     break;
//                 case "澳门特别行政区":
//                     posdesc = "性感荷官，在线发牌。";
//                     break;
//                 default:
//                     posdesc = "带我去你的城市逛逛吧！";
//                     break;
//             }
//             break;
//         default:
//             posdesc = "带我去你的国家逛逛吧。";
//             break;
//     }
//
//     //根据本地时间切换欢迎语
//     let timeChange;
//     let date = new Date();
//     if (date.getHours() >= 5 && date.getHours() < 11) timeChange = "<span>上午好</span>，一日之计在于晨！";
//     else if (date.getHours() >= 11 && date.getHours() < 13) timeChange = "<span>中午好</span>，该摸鱼吃午饭了。";
//     else if (date.getHours() >= 13 && date.getHours() < 15) timeChange = "<span>下午好</span>，懒懒地睡个午觉吧！";
//     else if (date.getHours() >= 15 && date.getHours() < 16) timeChange = "<span>三点几啦</span>，一起饮茶呀！";
//     else if (date.getHours() >= 16 && date.getHours() < 19) timeChange = "<span>夕阳无限好！</span>";
//     else if (date.getHours() >= 19 && date.getHours() < 24) timeChange = "<span>晚上好</span>，夜生活嗨起来！";
//     else timeChange = "夜深了，早点休息，少熬夜。";
//
//     try {
//         //自定义文本和需要放的位置
//         document.getElementById("welcome-info").innerHTML =
//             `<b><center>🎉 欢迎信息 🎉</center>&emsp;&emsp;欢迎来自 <span style="color:var(--theme-color)">${pos}</span> 的小伙伴，${timeChange}您现在距离站长约 <span style="color:var(--theme-color)">${dist}</span> 公里，当前的IP地址为： <span style="color:var(--theme-color)">${ip}</span>， ${posdesc}</b>`;
//     } catch (err) {
//         // console.log("Pjax无法获取#welcome-info元素🙄🙄🙄")
//     }
// }
//
// window.onload = showWelcome;
// // 如果使用了pjax在加上下面这行代码
// document.addEventListener('pjax:complete', showWelcome);



/* =====================================
 * Tencent Map IP Location (txmap.js)
 * 适配 Butterfly 主题
 * ===================================== */

let ipLoacation = null;
let ipLoading = false;

/* ========== 获取 IP 地理位置（JSONP） ========== */
function loadIpLocation(callback) {
    if (ipLoacation || ipLoading) return;

    ipLoading = true;

    $.ajax({
        type: 'get',
        url: 'https://apis.map.qq.com/ws/location/v1/ip',
        data: {
            key: 'OANBZ-WGOC7-W4LXH-POSPC-F7HST-OTFQV',
            output: 'jsonp'
        },
        dataType: 'jsonp',
        timeout: 5000,
        success: function (res) {
            if (res && res.status === 0 && res.result) {
                ipLoacation = res;
                callback && callback();
            }
        },
        error: function () {
            ipLoacation = null;
        },
        complete: function () {
            ipLoading = false;
        }
    });
}

/* ========== 计算两点间球面距离（公里） ========== */
function getDistance(e1, n1, e2, n2) {
    if (
        [e1, n1, e2, n2].some(v => typeof v !== 'number' || isNaN(v))
    ) return 0;

    const R = 6371;
    const { sin, cos, asin, PI, hypot } = Math;

    let getPoint = (e, n) => {
        e *= PI / 180;
        n *= PI / 180;
        return {
            x: cos(n) * cos(e),
            y: cos(n) * sin(e),
            z: sin(n)
        };
    };

    let a = getPoint(e1, n1);
    let b = getPoint(e2, n2);
    let c = hypot(a.x - b.x, a.y - b.y, a.z - b.z);
    return Math.round(asin(Math.min(1, c / 2)) * 2 * R);
}

/* ========== 主逻辑：欢迎信息 ========== */
function showWelcome() {
    if (
        !ipLoacation ||
        !ipLoacation.result ||
        !ipLoacation.result.location ||
        !document.getElementById('welcome-info')
    ) return;

    const info = ipLoacation.result;
    const ad = info.ad_info || {};
    const loc = info.location || {};

    let pos = ad.nation || '未知地区';
    let ip = info.ip || '未知 IP';

    let dist = getDistance(
        120.02,
        30.27,
        loc.lng,
        loc.lat
    );

    let posdesc = '欢迎访问本站，希望你在这里有所收获。';

    /* ===== 国家级文案 ===== */
    switch (ad.nation) {
        case '日本': posdesc = 'よろしく，一起去看樱花吗？'; break;
        case '美国': posdesc = 'May peace be with you.'; break;
        case '英国': posdesc = '想与你夜乘伦敦眼。'; break;
        case '俄罗斯': posdesc = '干了这杯伏特加！'; break;
        case '法国': posdesc = "C'est la vie."; break;
        case '德国': posdesc = 'Die Zeit verging im Fluge.'; break;
        case '澳大利亚': posdesc = '一起去大堡礁看看吧！'; break;
        case '加拿大': posdesc = '拾一片枫叶赠予你。'; break;

        case '中国':
            pos = [ad.province, ad.city, ad.district].filter(Boolean).join(' ');
            posdesc = getChinaDesc(ad);
            break;

        default:
            posdesc = '世界很大，感谢你的到来。';
    }

    /* ===== 时间问候 ===== */
    const hour = new Date().getHours();
    let timeChange =
        hour >= 5 && hour < 11 ? '<span>上午好</span>，愿你今日顺利。' :
            hour < 13 ? '<span>中午好</span>，记得按时吃饭。' :
                hour < 15 ? '<span>下午好</span>，适当放松一下。' :
                    hour < 16 ? '<span>三点几啦</span>，一起饮茶呀！' :
                        hour < 19 ? '<span>傍晚好</span>，愿你收获满满。' :
                            hour < 24 ? '<span>晚上好</span>，愿你有个好心情。' :
                                '夜深了，记得早点休息。';

    document.getElementById('welcome-info').innerHTML = `
        <b>
            <center>🎉 欢迎信息 🎉</center>
            欢迎来自 <span style="color:var(--theme-color)">${pos}</span> 的朋友，
            ${timeChange}
            <br>
            您当前距离站长约
            <span style="color:var(--theme-color)">${dist}</span> 公里，
            IP 地址：
            <span style="color:var(--theme-color)">${ip}</span>
            <br>
            ${posdesc}
        </b>
    `;
}

/* ========== 中国地区文案（拆分增强可维护性） ========== */
function getChinaDesc(ad) {
    const p = ad.province || '';
    const c = ad.city || '';

    const map = {
        '北京市': '北——京——欢迎你。',
        '天津市': '来段相声助助兴。',
        '河北省': '天下雄关，山河壮丽。',
        '山西省': '表里山河，晋善晋美。',
        '内蒙古自治区': '天苍苍，野茫茫。',
        '辽宁省': '安排一顿地道烧烤吧。',
        '吉林省': '白山黑水，热情豪爽。',
        '黑龙江省': '冰城的冬天很浪漫。',
        '上海市': '魔都不夜城。',
        '浙江省': '人间天堂，诗画江南。',
        '安徽省': '蚌埠住了，芜湖起飞。',
        '福建省': '山海相逢，风景正好。',
        '江西省': '落霞与孤鹜齐飞。',
        '山东省': '齐鲁大地，礼仪之邦。',
        '湖北省': '来碗热干面吧。',
        '湖南省': '辣得过瘾，吃得开心。',
        '广东省': '饮茶先啦。',
        '广西壮族自治区': '桂林山水甲天下。',
        '海南省': '面朝大海，春暖花开。',
        '四川省': '巴适得板。',
        '贵州省': '山水秘境，醇香四溢。',
        '云南省': '彩云之南，风景如画。',
        '陕西省': '来碗臊子面。',
        '甘肃省': '大漠孤烟直。',
        '青海省': '天地辽阔，心亦澄明。',
        '宁夏回族自治区': '塞上江南。',
        '新疆维吾尔自治区': '丝路古道，热情豪迈。',
        '台湾省': '海峡两岸，血脉相连。',
        '香港特别行政区': '东方之珠。',
        '澳门特别行政区': '风情万种的小城。'
    };

    return map[p] || '欢迎来自这片热土的朋友。';
}

/* ========== 初始化 ========== */
loadIpLocation(showWelcome);

document.addEventListener('pjax:complete', function () {
    if (ipLoacation) showWelcome();
});
