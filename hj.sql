

SET NAMES UTF8;
DROP DATABASE IF EXISTS hj;
#创建数据hj
CREATE DATABASE hj CHARSET=UTF8;
#进入数据库hj
USE hj;

CREATE TABLE RedWine_lyb(
    lybid INT PRIMARY KEY AUTO_INCREMENT,
    lyb_content  VARCHAR(128),
    is_onsale BOOLEAN
);
INSERT INTO RedWine_lyb VALUES(null,'酒非常好喝，希望以后有更好的红酒','1');
INSERT INTO RedWine_lyb VALUES(null,'外包装不错，送人很有面子','1');
INSERT INTO RedWine_lyb VALUES(null,'自己喝的，口感真的不错，家人都很喜欢','1');

/*商品详情*/
DROP TABLE IF EXISTS hj_shangpin;
CREATE TABLE hj_shangpin(
    lid INT PRIMARY KEY AUTO_INCREMENT,
    family_id int(11) default NULL,
    title  VARCHAR(128),
    subtitle VARCHAR(128),
    price decimal(10,2),
    spec VARCHAR(128),
    spec2 VARCHAR(128),
    spec3 VARCHAR(128)
);

INSERT INTO hj_shangpin VALUES(1,1,'法国进口红酒 卡伯纳小红鸟干红葡萄酒整箱6支装','豪华礼盒装  6支整箱','1386','规格1：豪华礼盒装','规格2：豪华礼盒装','规格3：豪华礼盒装');
INSERT INTO hj_shangpin VALUES(2,1,'法国进口红酒 卡伯纳小红鸟干红葡萄酒整箱1支装','豪华礼盒装  1支整箱','2458','规格1：豪华礼盒装','规格2：豪华礼盒装','规格3：豪华礼盒装');
INSERT INTO hj_shangpin VALUES(3,2,'法国进口红酒 卡伯纳小红鸟干红葡萄酒整箱2支装','豪华礼盒装  2支整箱','4735','规格1：豪华礼盒装','规格2：豪华礼盒装','规格3：豪华礼盒装');
INSERT INTO hj_shangpin VALUES(4,2,'法国进口红酒 卡伯纳小红鸟干红葡萄酒整箱6支装','豪华礼盒装  6支整箱','1386','规格1：豪华礼盒装','规格2：豪华礼盒装','规格3：豪华礼盒装');
INSERT INTO hj_shangpin VALUES(5,3,'法国进口红酒 卡伯纳小红鸟干红葡萄酒整箱1支装','豪华礼盒装  1支整箱','2458','规格1：豪华礼盒装','规格2：豪华礼盒装','规格3：豪华礼盒装');
INSERT INTO hj_shangpin VALUES(6,3,'法国进口红酒 卡伯纳小红鸟干红葡萄酒整箱2支装','豪华礼盒装  2支整箱','4735','规格1：豪华礼盒装','规格2：豪华礼盒装','规格3：豪华礼盒装');
INSERT INTO hj_shangpin VALUES(7,4,'法国进口红酒 卡伯纳小红鸟干红葡萄酒整箱6支装','豪华礼盒装  6支整箱','1386','规格1：豪华礼盒装','规格2：豪华礼盒装','规格3：豪华礼盒装');
INSERT INTO hj_shangpin VALUES(8,4,'法国进口红酒 卡伯纳小红鸟干红葡萄酒整箱1支装','豪华礼盒装  1支整箱','2458','规格1：豪华礼盒装','规格2：豪华礼盒装','规格3：豪华礼盒装');
INSERT INTO hj_shangpin VALUES(9,5,'法国进口红酒 卡伯纳小红鸟干红葡萄酒整箱2支装','豪华礼盒装  2支整箱','4735','规格1：豪华礼盒装','规格2：豪华礼盒装','规格3：豪华礼盒装');
INSERT INTO hj_shangpin VALUES(10,5,'法国进口红酒 卡伯纳小红鸟干红葡萄酒整箱6支装','豪华礼盒装  6支整箱','1386','规格1：豪华礼盒装','规格2：豪华礼盒装','规格3：豪华礼盒装');


/*三张大小图片*/


CREATE TABLE hj_lg (
  `pid` int(11) NOT NULL auto_increment,
  `hj_id` int(11) default NULL,
  `sm` varchar(128) default NULL,
  `md` varchar(128) default NULL,
  `lg` varchar(128) default NULL,
  PRIMARY KEY  (`pid`)
) ENGINE=InnoDB AUTO_INCREMENT=297 DEFAULT CHARSET=utf8;

INSERT INTO `hj_lg` VALUES ('1', '1', 'images/product-detail/1.sm.jpg', 'images/product-detail/1.md.jpg', 'images/product-detail/1.lg.jpg');
INSERT INTO `hj_lg` VALUES ('2', '2', 'images/product-detail/2.sm.jpg', 'images/product-detail/2.md.jpg', 'images/product-detail/2.md.jpg');
INSERT INTO `hj_lg` VALUES ('3', '3', 'images/product-detail/3.sm.jpg', 'images/product-detail/3.md.jpg', 'images/product-detail/3.md.jpg');
INSERT INTO `hj_lg` VALUES ('4', '4', 'images/product-detail/1.sm.jpg', 'images/product-detail/1.md.jpg', 'images/product-detail/1.lg.jpg');
INSERT INTO `hj_lg` VALUES ('5', '5', 'images/product-detail/2.sm.jpg', 'images/product-detail/2.md.jpg', 'images/product-detail/2.md.jpg');
INSERT INTO `hj_lg` VALUES ('6', '6', 'images/product-detail/3.sm.jpg', 'images/product-detail/3.md.jpg', 'images/product-detail/3.md.jpg');
INSERT INTO `hj_lg` VALUES ('7', '7', 'images/product-detail/1.sm.jpg', 'images/product-detail/1.md.jpg', 'images/product-detail/1.lg.jpg');
INSERT INTO `hj_lg` VALUES ('8', '8', 'images/product-detail/2.sm.jpg', 'images/product-detail/2.md.jpg', 'images/product-detail/2.md.jpg');
INSERT INTO `hj_lg` VALUES ('9', '9', 'images/product-detail/3.sm.jpg', 'images/product-detail/3.md.jpg', 'images/product-detail/3.md.jpg');
INSERT INTO `hj_lg` VALUES ('10', '10', 'images/product-detail/1.sm.jpg', 'images/product-detail/1.md.jpg', 'images/product-detail/1.lg.jpg');



-- -------------用户信息表-------------
CREATE TABLE `hj_user` (
  `uid` int(11) NOT NULL auto_increment,
  `uname` varchar(32),
  `upwd` varchar(32),
  `email` varchar(64),
  `phone` varchar(16),
  `user_name` varchar(32),
  `gender` int(11),
  PRIMARY KEY  (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8;

INSERT INTO `hj_user` VALUES ('1', 'dingding', '123456', 'ding@qq.com', '13511011000','丁春秋','1');
INSERT INTO `hj_user` VALUES ('2', 'dangdang', '123456', 'dang@qq.com', '13501234568','当当喵','1');
INSERT INTO `hj_user` VALUES ('3', 'doudou', '123456', 'dou@qq.com', '13501234569','豆豆','1');
INSERT INTO `hj_user` VALUES ('4', 'yaya', '123456', 'ya@qq.com', '13501234560','丫丫','0');