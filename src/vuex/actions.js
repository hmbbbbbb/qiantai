// 获取秒杀数据
export const loadSeckillsInfo = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const data = [
      {
        intro: '【赠小风扇】维他 柠檬茶250ml*32盒 礼品装 整箱',
        img: 'static/img/index/seckill/seckill-item1.jpg',
        price: 71.9,
        realPrice: 89.6
      },
      {
        intro: 'Kindle Paperwhite 全新升级版6英寸护眼非反光电子墨水',
        img: 'static/img/index/seckill/seckill-item2.jpg',
        price: 989.0,
        realPrice: 1299.0
      },
      {
        intro: '粮悦 大吃兄糯米锅巴 安徽特产锅巴糯米原味400g*2盒',
        img: 'static/img/index/seckill/seckill-item3.jpg',
        price: 21.8,
        realPrice: 49.0
      },
      {
        intro: '【京东超市】清风（APP）抽纸 原木纯品金装系列 3层',
        img: 'static/img/index/seckill/seckill-item4.jpg',
        price: 49.9,
        realPrice: 59.0
      },
      {
        intro: 'NIKE耐克 男子休闲鞋 AIR MAX 90 ESSENTIAL 气垫',
        img: 'static/img/index/seckill/seckill-item5.jpg',
        price: 559.9,
        realPrice: 759.9
      }
    ];
    const date = new Date();
    const hours = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();
    console.log([hours, minute, seconds]);
    // 距离开始秒杀时间
    const deadline = {
      hours: 1,
      minute: 38,
      seconds: 36
    };
    commit('SET_SECKILLS_INFO', [data, deadline]);
  });
};

// 获取轮播(营销)图片
export const loadCarouselItems = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const data = {
      carouselItems: [
        'static/img/nav/1.jpg',
        'static/img/nav/2.jpg',
        'static/img/nav/3.jpg',
        'static/img/nav/4.jpg',
        'static/img/nav/5.jpg'
      ],
      activity: [
        'static/img/nav/nav_showimg1.jpg',
        'static/img/nav/nav_showimg2.jpg'
      ]
    };
    commit('SET_CAROUSELITEMS_INFO', data);
  });
};

// 加载电脑专栏数据
export const loadComputer = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const computer = {
      title: '电脑数码',
      link: [ '电脑馆', '游戏极品', '装机大师', '职场焕新', '女神频道', '虚拟现实', '二合一平板', '电子教育', '万物周刊' ],
      detail: [
        {
          bigImg: 'static/img/index/computer/item-computer-1.jpg',
          itemFour: [
            {
              title: '电脑馆',
              intro: '笔记本999元限量秒！',
              img: 'static/img/index/computer/item-computer-2.jpg'
            },
            {
              title: '外设装备',
              intro: '1000减618',
              img: 'static/img/index/computer/item-computer-1-3.jpg'
            },
            {
              title: '电脑配件',
              intro: '联合满减最高省618',
              img: 'static/img/index/computer/item-computer-1-4.jpg'
            },
            {
              title: '办公生活',
              intro: '5折神券 精品文具',
              img: 'static/img/index/computer/item-computer-1-5.jpg'
            }
          ],
          itemContent: [
            'static/img/index/computer/item-computer-1-6.jpg',
            'static/img/index/computer/item-computer-1-7.jpg',
            'static/img/index/computer/item-computer-1-8.jpg'
          ]
        },
        {
          bigImg: 'static/img/index/computer/item-computer-2-1.jpg',
          itemFour: [
            {
              title: '平板电脑',
              intro: '爆款平板12期免息',
              img: 'static/img/index/computer/item-computer-2-2.jpg'
            },
            {
              title: '智能酷玩',
              intro: '抢999减666神券',
              img: 'static/img/index/computer/item-computer-2-3.jpg'
            },
            {
              title: '娱乐影音',
              intro: '大牌耳机低至5折',
              img: 'static/img/index/computer/item-computer-2-4.jpg'
            },
            {
              title: '摄影摄像',
              intro: '大牌相机5折抢',
              img: 'static/img/index/computer/item-computer-2-5.jpg'
            }
          ],
          itemContent: [
            'static/img/index/computer/item-computer-2-6.jpg',
            'static/img/index/computer/item-computer-2-7.jpg',
            'static/img/index/computer/item-computer-2-8.jpg'
          ]
        }
      ]
    };
    commit('SET_COMPUTER_INFO', computer);
  });
};

// 加载爱吃专栏数据
export const loadEat = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const eat = {
      title: '爱吃',
      link: [ '休闲零食', '坚果', '牛奶', '饮料冲调', '食用油', '大米', '白酒', '红酒', '烧烤食材', '牛排', '樱桃' ],
      detail: [
        {
          bigImg: 'static/img/index/eat/item-eat-1-1.jpg',
          itemFour: [
            {
              title: '粮油调味',
              intro: '买2免1',
              img: 'static/img/index/eat/item-eat-1-2.jpg'
            },
            {
              title: '饮料冲调',
              intro: '第二件半价',
              img: 'static/img/index/eat/item-eat-1-3.jpg'
            },
            {
              title: '休闲零食',
              intro: '满99减40',
              img: 'static/img/index/eat/item-eat-1-4.jpg'
            },
            {
              title: '中外名酒',
              intro: '满199减100',
              img: 'static/img/index/eat/item-eat-1-5.jpg'
            }
          ],
          itemContent: [
            'static/img/index/eat/item-eat-1-6.jpg',
            'static/img/index/eat/item-eat-1-7.jpg',
            'static/img/index/eat/item-eat-1-8.jpg'
          ]
        },
        {
          bigImg: 'static/img/index/eat/item-eat-2-1.jpg',
          itemFour: [
            {
              title: '东家菜',
              intro: '丰富好味',
              img: 'static/img/index/eat/item-eat-2-2.jpg'
            },
            {
              title: '东家菜',
              intro: '丰富好味',
              img: 'static/img/index/eat/item-eat-2-2.jpg'
            },
            {
              title: '东家菜',
              intro: '丰富好味',
              img: 'static/img/index/eat/item-eat-2-2.jpg'
            },
            {
              title: '东家菜',
              intro: '丰富好味',
              img: 'static/img/index/eat/item-eat-2-2.jpg'
            }
          ],
          itemContent: [
            'static/img/index/eat/item-eat-2-6.jpg',
            'static/img/index/eat/item-eat-2-7.jpg',
            'static/img/index/eat/item-eat-2-8.jpg'
          ]
        }
      ]
    };
    commit('SET_EAT_INFO', eat);
  });
};

// 请求获得商品详细信息
export const loadGoodsInfo = ({ commit }) => {
  commit('SET_LOAD_STATUS', true);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        goodsImg: [
          'static/img/goodsDetail/item-detail-1.jpg',
          'static/img/goodsDetail/item-detail-2.jpg',
          'static/img/goodsDetail/item-detail-3.jpg',
          'static/img/goodsDetail/item-detail-4.jpg'
        ],
        title: '广西新鲜红小米辣椒小米椒指天椒朝天椒美人椒5斤包邮特辣尖椒',
        tags: ['满69-10元', '关注产品★送优惠卷', '次日达'],
        discount: ['满148减10', '满218减20', '满288减30'],
        promotion: ['跨店满减', '多买优惠'],
        remarksNum: 6000,
        setMeal: [
          [
            {
              img: 'static/img/goodsDetail/pack/1.jpg',
              intro: '七彩椒5斤装',
              price: 28.0
            },
            {
              img: 'static/img/goodsDetail/pack/2.jpg',
              intro: '小米椒2斤装',
              price: 29.0
            },
            {
              img: 'static/img/goodsDetail/pack/3.jpg',
              intro: '干辣椒2斤装',
              price: 28.5
            }
          ],
          [
            {
              img: 'static/img/goodsDetail/pack/4.jpg',
              intro: '德国尖椒1斤装',
              price: 32.0
            },
            {
              img: 'static/img/goodsDetail/pack/5.jpg',
              intro: '重庆辣椒2斤装',
              price: 32.0
            },
            {
              img: 'static/img/goodsDetail/pack/6.jpg',
              intro: '贵州辣椒2斤装',
              price: 35.0
            }
          ],
          [
            {
              img: 'static/img/goodsDetail/pack/7.jpg',
              intro: '贵州辣椒1斤装',
              price: 26.0
            },
            {
              img: 'static/img/goodsDetail/pack/8.jpg',
              intro: '重庆辣椒一斤装',
              price: 25.0
            },
            {
              img: 'static/img/goodsDetail/pack/9.jpg',
              intro: '七彩椒试吃装',
              price: 28.0
            }
          ]
        ],
        hot: [
          {
            img: 'static/img/goodsDetail/hot/1.jpg',
            price: 28.0,
            sale: 165076
          },
          {
            img: 'static/img/goodsDetail/hot/2.jpg',
            price: 36.0,
            sale: 135078
          },
          {
            img: 'static/img/goodsDetail/hot/3.jpg',
            price: 38.0,
            sale: 105073
          },
          {
            img: 'static/img/goodsDetail/hot/4.jpg',
            price: 39.0,
            sale: 95079
          },
          {
            img: 'static/img/goodsDetail/hot/5.jpg',
            price: 25.0,
            sale: 5077
          },
          {
            img: 'static/img/goodsDetail/hot/6.jpg',
            price: 20.0,
            sale: 3077
          }
        ],
        goodsDetail: [
          'static/img/goodsDetail/intro/1.jpg',
          'static/img/goodsDetail/intro/2.jpg',
          'static/img/goodsDetail/intro/3.jpg',
          'static/img/goodsDetail/intro/4.jpg'
        ],
        param: [
          {
            title: '商品名称',
            content: '辣椒'
          },
          {
            title: '商品编号',
            content: '10435663237'
          },
          {
            title: '店铺',
            content: '旺宝的小家'
          },
          {
            title: '商品毛重',
            content: '1000.00g'
          },
          {
            title: '商品产地',
            content: '中国大陆'
          },
          {
            title: '包装方式',
            content: '食用农产品'
          },
          {
            title: '品牌',
            content: '自主品牌'
          },
          {
            title: '保质期',
            content: '20天'
          },
          {
            title: '适用人群',
            content: '老少皆宜'
          }
        ],
        remarks: {
          goodAnalyse: 90,
          remarksTags: [ '颜色可人', '实惠优选', '严丝合缝', '极致轻薄', '质量没话说', '比定做还合适', '完美品质', '正品行货', '包装有档次', '不容易发热', '已经买第二个', '是全覆盖' ],
          remarksNumDetail: [ 2000, 3000, 900, 1 ],
          detail: [
            {
              username: 'p****1',
              values: 3,
              content: '太划算了，我们这边菜场卖十五块钱一斤，真心黑，每次买菜只敢买一二两配菜用，现在买这么多可以泡这吃，吃一年没问题了',
              goods: '七彩椒5斤装',
              create_at: '2018-05-15 09:20'
            },
            {
              username: '13****1',
              values: 5,
              content: '很新鲜的辣椒，发货快，当天下单第二天就收到了，给老妈搞蒜蓉辣酱，价格又实惠，值得购买',
              goods: '德国尖椒1斤装',
              create_at: '2018-05-13 15:23'
            },
            {
              username: '3****z',
              values: 4.5,
              content: '小米椒已收到，物流很快，辣椒很好，一大箱辣椒都很好，只有几个坏辣椒，这么大热天真不容易，这说明辣椒新鲜，物流给力。已做好秘制蒜蓉辣椒酱，味道刚刚的。',
              goods: '小米椒2斤装',
              create_at: '2018-05-05 12:25'
            },
            {
              username: 'gd****c',
              values: 3.5,
              content: '就是我想要的辣椒，辣椒很辣，味道不错，就像小时后的味道，想要吃辣椒的赶快下手了。',
              goods: '贵州辣椒2斤装',
              create_at: '2018-04-06 16:23'
            },
            {
              username: 'r****b',
              values: 4.5,
              content: '辣椒还不错，就是小贵，纠结！',
              goods: '贵州辣椒2斤装',
              create_at: '2018-03-15 19:24'
            },
            {
              username: 'd****e',
              values: 5,
              content: '好吃，下次买多点！',
              goods: '重庆辣椒一斤装',
              create_at: '2018-03-10 10:13'
            }
          ]
        }
      };
      commit('SET_GOODS_INFO', data);
      commit('SET_LOAD_STATUS', false);
    }, 300);
  });
};

// 获取商品列表
export const loadGoodsList = ({ commit }) => {
  commit('SET_LOAD_STATUS', true);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        asItems: [
          {
            img: 'static/img/goodsList/item-as-img-1.jpg',
            price: 39.9,
            intro: '蒜蓉辣椒酱湖南香辣农家自制辣酱下饭蒜泥小米椒四川剁椒酱超辣',
            num: 3140,
            sale: 9000
          },
          {
            img: 'static/img/goodsList/item-as-img-2.jpg',
            price: 36.6,
            intro: '四川蒜蓉辣椒酱下饭自制农家湖南小米椒烧烤调料烧烤剁椒辣酱超辣',
            num: 6160,
            sale: 8900
          },
          {
            img: 'static/img/goodsList/item-as-img-1.jpg',
            price: 38.6,
            intro: '新鲜红辣椒广西小米椒超辣泰椒自剁酱农家朝天椒特辣蔬菜 5斤包邮',
            num: 9160,
            sale: 8800
          },
          {
            img: 'static/img/goodsList/item-as-img-2.jpg',
            price: 35.6,
            intro: '新鲜红辣椒广西小米椒超辣泰椒自剁酱农家朝天椒特辣蔬菜 5斤包邮',
            num: 6160,
            sale: 7990
          },
          {
            img: 'static/img/goodsList/item-as-img-1.jpg',
            price: 38.6,
            intro: '新红辣椒广西小米椒超辣泰椒自剁酱农家朝天椒特辣蔬菜 5包邮',
            num: 9160,
            sale: 7600
          },
          {
            img: 'static/img/goodsList/item-as-img-2.jpg',
            price: 35.6,
            intro: '广西新鲜小米椒超辣椒土红椒朝天椒尖椒蔬菜小米七星椒 5斤装包邮',
            num: 6160,
            sale: 6900
          }
        ],
        goodsList: [
          {
            img: 'static/img/goodsList/item-show-1.jpg',
            price: 36.60,
            intro: '酸辣椒广西桂林小米椒全州老坛腌制白米椒脆比较辣500克6斤包邮',
            remarks: 6160,
            shopName: '元亨专营店',
            sale: 9900
          },
          {
            img: 'static/img/goodsList/item-show-2.jpg',
            price: 28.00,
            intro: '广西新鲜指天椒特辣小米椒现摘尖椒野山椒3斤包邮',
            remarks: 3000,
            shopName: 'monqiqi旗舰店',
            sale: 9600
          },
          {
            img: 'static/img/goodsList/item-show-3.jpg',
            price: 15.00,
            intro: '魔鬼青椒鲜红辣椒椒朝天超土广西装朝天椒特辣新鲜小米椒5斤包',
            remarks: 2800,
            shopName: '魔鬼官方旗舰店',
            sale: 8900
          },
          {
            img: 'static/img/goodsList/item-show-4.jpg',
            price: 29.90,
            intro: '新鲜小米椒特辣超辣红农家朝天尖椒花椒剁椒5斤装鲜椒泡椒野山椒',
            remarks: 9000,
            shopName: '野山椒专营店',
            sale: 8600
          },
          {
            img: 'static/img/goodsList/item-show-5.jpg',
            price: 15.00,
            intro: '香辣型福建辣椒王古田朝天椒卤菜鸭脖专用辣椒现捞鸭脖专用干辣椒',
            remarks: 6160,
            shopName: '宽窄旗舰店',
            sale: 8560
          },
          {
            img: 'static/img/goodsList/item-show-6.jpg',
            price: 28.00,
            intro: '干辣椒魔鬼椒超辣特辣辣椒干变态辣辣椒粉辣椒面正宗印度魔鬼辣椒',
            remarks: 9006,
            shopName: '歌乐力手配专营店',
            sale: 8530
          },
          {
            img: 'static/img/goodsList/item-show-7.jpg',
            price: 15.00,
            intro: '新鲜小米辣椒朝天椒5斤剁椒红线椒特辣指天椒特辣五七彩泡椒尖椒',
            remarks: 8666,
            shopName: 'BIAZE官方旗舰店',
            sale: 8360
          },
          {
            img: 'static/img/goodsList/item-show-8.jpg',
            price: 29.90,
            intro: '广西新鲜红小米辣椒小米椒指天椒朝天椒美人椒5斤包邮特辣尖椒',
            remarks: 6080,
            shopName: '歌乐力手配专营店',
            sale: 7560
          },
          {
            img: 'static/img/goodsList/item-show-1.jpg',
            price: 36.60,
            intro: '湘汝辣王之王蒜蓉剁椒辣椒酱湖南特产农家自制超特辣下饭菜香辣酱',
            remarks: 6160,
            shopName: '湘汝专营店',
            sale: 7360
          },
          {
            img: 'static/img/goodsList/item-show-2.jpg',
            price: 28.00,
            intro: '新鲜螺丝辣椒5斤现摘应季蔬菜农家青皮椒菜椒长辣子米椒特产包邮',
            remarks: 3000,
            shopName: 'monqiqi旗舰店',
            sale: 6960
          },
          {
            img: 'static/img/goodsList/item-show-3.jpg',
            price: 15.00,
            intro: '新鲜小米辣椒朝天椒5斤剁椒红线椒特辣指天椒特辣五七彩泡椒尖椒',
            remarks: 2800,
            shopName: 'BIAZE官方旗舰店',
            sale: 6560
          },
          {
            img: 'static/img/goodsList/item-show-4.jpg',
            price: 29.90,
            intro: '广西新鲜红小米辣椒小米椒指天椒朝天椒美人椒5斤包邮特辣尖椒',
            remarks: 9000,
            shopName: '歌乐力手配专营店',
            sale: 6360
          },
          {
            img: 'static/img/goodsList/item-show-5.jpg',
            price: 15.00,
            intro: '新鲜小米辣椒朝天椒5斤剁椒红线椒特辣指天椒特辣五七彩泡椒尖椒',
            remarks: 6160,
            shopName: 'BIAZE官方旗舰店',
            sale: 5530
          },
          {
            img: 'static/img/goodsList/item-show-6.jpg',
            price: 28.00,
            intro: '广西新鲜红小米辣椒小米椒指天椒朝天椒美人椒5斤包邮特辣尖椒',
            remarks: 9006,
            shopName: '歌乐力手配专营店',
            sale: 5560
          },
          {
            img: 'static/img/goodsList/item-show-7.jpg',
            price: 15.00,
            intro: '新鲜小米辣椒朝天椒5斤剁椒红线椒特辣指天椒特辣五七彩泡椒尖椒',
            remarks: 8666,
            shopName: 'BIAZE官方旗舰店',
            sale: 5260
          },
          {
            img: 'static/img/goodsList/item-show-8.jpg',
            price: 29.90,
            intro: '广西新鲜红小米辣椒小米椒指天椒朝天椒美人椒5斤包邮特辣尖椒',
            remarks: 6080,
            shopName: '歌乐力手配专营店',
            sale: 3560
          }
        ]
      };
      commit('SET_GOODS_LIST', data);
      commit('SET_LOAD_STATUS', false);
    });
  });
};

// 添加购物车
export const addShoppingCart = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    commit('ADD_SHOPPING_CART', data);
  });
};

// 获取用户推荐
export const loadRecommend = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const data = [
      [
        {
          img: 'static/img/otherBuy/1.jpg',
          intro: '广西新鲜红小米辣椒小米椒指天椒朝天椒美人椒5斤包邮特辣尖椒',
          price: 29.00
        },
        {
          img: 'static/img/otherBuy/2.jpg',
          intro: '山东农家新鲜蔬菜辣椒现摘现发 虎皮嫩薄青椒大牛泡椒5斤包邮',
          price: 36.00
        },
        {
          img: 'static/img/otherBuy/3.jpg',
          intro: '广西特产新鲜七彩椒辣椒五彩椒泡椒灯笼椒剁椒五色生辣椒2斤包邮',
          price: 19.00
        },
        {
          img: 'static/img/otherBuy/4.jpg',
          intro: '五彩椒广西柳州特产七彩椒现摘酱香脆口泡辣生辣椒灯笼椒新鲜蔬菜',
          price: 28.00
        }
      ],
      [
        {
          img: 'static/img/otherBuy/5.jpg',
          intro: '小米椒新鲜5斤特辣青红朝天椒农家自种超鲜泡椒剁辣椒应季叶蔬菜',
          price: 28.00
        },
        {
          img: 'static/img/otherBuy/6.jpg',
          intro: '湖南湘阴正宗樟树港辣椒 顺丰包邮天价辣椒 净重2斤现摘新鲜1000g',
          price: 30.00
        },
        {
          img: 'static/img/otherBuy/7.jpg',
          intro: '山东枣庄新鲜薄皮青辣椒皱皮螺丝特辣辣椒炒鸡炒肉辣椒5斤装包邮',
          price: 18.00
        },
        {
          img: 'static/img/otherBuy/8.jpg',
          intro: '新鲜野山椒 广西白米椒特辣小米辣剁椒泡椒白色辣椒蔬菜5斤装包邮',
          price: 15.00
        }
      ]
    ];
    commit('SET_RECOMMEND_INFO', data);
  });
};

export const loadAddress = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const address = [
      {
        addressId: '123456',
        name: 'WB',
        province: '广东省',
        city: '广州市',
        area: '天河区',
        address: '燕岭路633号',
        phone: '152****0609',
        postalcode: '510000'
      },
      {
        addressId: '123458',
        name: 'Kevin',
        province: '上海市',
        city: '上海市',
        area: '浦东新区',
        address: '沙新镇',
        phone: '158****0888',
        postalcode: '200120'
      }
    ];
    commit('SET_USER_ADDRESS', address);
  });
};

export const loadShoppingCart = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const data = [{
      goods_id: 1529931938150,
      count: 1,
      img: 'static/img/goodsDetail/pack/1.jpg',
      package: '七彩椒5斤装',
      price: 28,
      title: '广西新鲜红小米辣椒小米椒指天椒朝天椒美人椒5斤包邮特辣尖椒'
    }];
    commit('SET_SHOPPING_CART', data);
  });
};

// 添加注册用户
export const addSignUpUser = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    const userArr = localStorage.getItem('users');
    let users = [];
    if (userArr) {
      users = JSON.parse(userArr);
    }
    users.push(data);
    localStorage.setItem('users', JSON.stringify(users));
  });
};

// 用户登录
export const login = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    if (data.username === 'WB' && data.password === '123456') {
      localStorage.setItem('loginInfo', JSON.stringify(data));
      commit('SET_USER_LOGIN_INFO', data);
      resolve(true);
      return true;
    }
    const userArr = localStorage.getItem('users');
    console.log(userArr);
    if (userArr) {
      const users = JSON.parse(userArr);
      for (const item of users) {
        if (item.username === data.username) {
          localStorage.setItem('loginInfo', JSON.stringify(item));
          commit('SET_USER_LOGIN_INFO', item);
          resolve(true);
          break;
        }
      }
    } else {
      resolve(false);
    }
  });
};

// 退出登陆
export const signOut = ({ commit }) => {
  localStorage.removeItem('loginInfo');
  commit('SET_USER_LOGIN_INFO', {});
};

// 判断是否登陆
export const isLogin = ({ commit }) => {
  const user = localStorage.getItem('loginInfo');
  if (user) {
    commit('SET_USER_LOGIN_INFO', JSON.parse(user));
  }
};
