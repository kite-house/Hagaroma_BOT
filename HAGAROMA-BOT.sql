-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Апр 27 2023 г., 20:00
-- Версия сервера: 8.0.30
-- Версия PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `HAGAROMA-BOT`
--

-- --------------------------------------------------------

--
-- Структура таблицы `structure_hagaroma`
--

CREATE TABLE `structure_hagaroma` (
  `id` int NOT NULL,
  `discord_id` text NOT NULL,
  `server_username` text NOT NULL,
  `system_username` text NOT NULL,
  `avatar` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `role` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `structure_hagaroma`
--

INSERT INTO `structure_hagaroma` (`id`, `discord_id`, `server_username`, `system_username`, `avatar`, `role`) VALUES
(1, '807541066106535977', 'Caesar', 'uznikLP#2465', '2170e6d048e20d2e4400bfde01e3a780', '<@&786669269206433842>, <@&883689152439279659>'),
(2, '624982743243030578', 'manera', 'aotik#4818', '7533b631ab07f0c9150ab525092af295', '<@&786669269206433842>'),
(3, '964593416606457897', 'Hisoka', 'Hisoka#5555', 'a_3c35f278d78602438201b92d85483692', '<@&786669269206433842>, <@&883689152439279659>'),
(4, '343339732975091714', 'Charles Martinez', 'kite#8999', '927cfb5c323a2679f2d7464647be8ac5', '<@&786669269206433842>, <@&1036019427168223314>, <@&1096520911605215322>'),
(5, '555383948067340304', 'Lisa Hagaroma', 'Natrix#5918', 'c08bcbfbb3868fbeaef5dfc47300bb06', '<@&786669269206433842>'),
(6, '449960522083991552', 'Fedor', 'Fedor#1073', 'ecf6e60e9a6a70eea3aee6f7437b8cee', '<@&786669269206433842>, <@&847905861342199888>, <@&1036019427168223314>'),
(7, '630355283172130837', 'William(Will)', '//#4257', 'e467f462d9a582899b1a4ca6a29ca1cc', '<@&786669269206433842>, <@&1003645290894598174>'),
(8, '447777980752592906', 'Trip Hagaroma', 'tr1pzex#9946', '9209aff5864cc87666f052171b926832', '<@&786669269206433842>, <@&883689152439279659>, <@&1003645290894598174>'),
(9, '397655391963447306', 'Slowfast', 'UHKACAT0P#6737', 'b34273cfd4b2d5e53cae671d09d960e8', '<@&786669269206433842>, <@&868133526820769803>'),
(10, '521346150570393600', 'Espaniolan', 'NEGAT!VE#3945', 'ff0b23f6928b53b406f38b4fec5be980', '<@&786669269206433842>, <@&1036019427168223314>'),
(11, '315170827546918915', 'Armen Hagaroma', 'Blessed#7780', '8b5d0fce5d951e89b225b9f72452f544', '<@&786669269206433842>, <@&883689152439279659>'),
(12, '743432450700476436', 'Maloy', 'крокант#1566', 'ac4f8a774440aad33a9b38e35ce6ea18', '<@&786669269206433842>, <@&1039645281010057366>'),
(13, '311152964373053473', 'Kent', 'xz#9487', '58cd1d8c14b135ea0ba309f4ce7111d3', '<@&786669269206433842>, <@&867882209582252103>, <@&1097915358964363305>'),
(14, '581539103762284574', 'Marchosias Hagaroma', 'Yoker#6666', 'a_507cd9e65771030d1017e8fd0ba51f13', '<@&786669269206433842>, <@&883689152439279659>, <@&952652605543313458>'),
(15, '563684573456629800', 'Fera Hagaroma', 'ferrari#4444', 'a_846b4c40f5d42742e3b271060b1a9579', '<@&786669269206433842>'),
(16, '826016330112696340', 'Brown Hagaroma', '💔𝘽𝙧𝙤𝙬𝙣💔#1204', 'cbded90cbaa3f3b21b36f8cd8cba1d7a', '<@&786669269206433842>, <@&1003645290894598174>'),
(17, '411143545836011520', 'Aqua(Akashi)', 'purinovan#5656', 'd9614e7f9f1e3bd78551881c693eb6d0', '<@&786669269206433842>, <@&1003645290894598174>'),
(18, '664172276215971869', '𝕸𝖎𝖓𝖆𝖙𝖔 𝕳𝖆𝖌𝖆𝖗𝖔𝖒𝖆', '𝖝_𝕸𝖎𝖓𝖆𝖙𝖔_𝖝#0396', '4eb9c494d21e94f0afda06c89e6fb621', '<@&786669269206433842>, <@&952652605543313458>'),
(19, '886310166784540713', 'Noah Hagaroma', 'Noah Hagaroma#3322', 'de62597caa9c8169069518b1d71c1a42', '<@&786669269206433842>, <@&883689152439279659>'),
(20, '666523822589083668', 'Oleg', 'Hinik#4930', 'c99ac4ca092998e5aaae7c3d7f516dde', '<@&786669269206433842>, <@&1003645290894598174>'),
(21, '436179755679612928', 'Berk', 'юй#7819', 'abe64e0e3a98ceb731f7f6e988743425', '<@&786669269206433842>, <@&1036019427168223314>'),
(22, '877542701812310047', 'Danilka', 'Dev1l#2411', 'b7c0cd79a04e94b96ab40d661a44cbb4', '<@&786669269206433842>, <@&1039645281010057366>'),
(23, '419151759471280138', 'Shin', 'kaguyaa#6666', '8a582e95ddb4ad40fa1bbc79282a84fb', '<@&786669269206433842>, <@&883689152439279659>'),
(24, '614028518669549568', 'Vitala', 'Фанат BMW#0228', '31bf25355ee210d8152574c0fee4125a', '<@&786669269206433842>, <@&848551987237748816>, <@&883689152439279659>, <@&952652605543313458>'),
(25, '298036240949706762', 'Vodnik', 'Курильщик из водного мира#0825', '7737cd55a09a3961844d335b29a8843b', '<@&786669269206433842>, <@&867882209582252103>, <@&883689152439279659>, <@&986347816299417642>, <@&1068933064782270526>'),
(26, '480336425741582356', 'Ceashi', 'Ceashi#4650', 'a_71204c738cd5c323707f3f8b0132a864', '<@&786669269206433842>, <@&883689152439279659>'),
(27, '482105304654413824', 'Yan', 'Yan Bianchi#5811', '3cb8b7b596a2e46efe3cd43243ad3e2a', '<@&786669269206433842>, <@&1076916697786744882>, <@&1095380462991581335>, <@&1100127028172308490>'),
(28, '953267882308010065', 'Kogi', 'Kogi#4163', '8da8cd13f1b26bce1f1312a8b7b77d00', '<@&786669269206433842>'),
(29, '594875424719241226', 'Kinkong', 'yupick#6666', 'a_80f4f17b3f721bcc68a2be5c8d411ae8', '<@&786669269206433842>, <@&847905861342199888>, <@&848551987237748816>, <@&883689152439279659>, <@&1095380462991581335>'),
(30, '698121210957135882', 'Killa (Gromoboi)', 'Rize#9367', 'f6cf3bbb3ebd4dca4a3ed5586be8aa3a', '<@&786669269206433842>, <@&883689152439279659>');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `discord_id` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `server_username` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `system_username` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `avatar` text NOT NULL,
  `role` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `discord_id`, `server_username`, `system_username`, `avatar`, `role`) VALUES
(1, '807541066106535977', 'Caesar', 'uznikLP@2465', '2170e6d048e20d2e4400bfde01e3a780', '[<@&786669269206433842>, <@&883689152439279659>]'),
(2, '694723629186809917', 'avangard', '43go@1781', 'ac9d5911308b6b4ceeb1da10b1eec7de', '[<@&869163811775610950>]'),
(3, '323533625650053131', 'Arkady Sever', 'Arkady Sever@3926', '27eb9fb0db5795ee2e72e3384065756c', '[<@&869163811775610950>]'),
(4, '624982743243030578', 'manera', 'aotik@4818', '7533b631ab07f0c9150ab525092af295', '[<@&786669269206433842>, <@&860601263543287900>, <@&1039645281010057366>]'),
(5, '663017993432858640', 'Халерик', 'Халерик@0512', 'dfd8dc295e98353b214d734fb32023a1', '[<@&868133526820769803>]'),
(6, '964593416606457897', 'Hisoka', 'Hisoka@5555', 'a_914c98c53e1d73a9af359c4f23804333', '[<@&786669269206433842>, <@&847905861342199888>, <@&869163811775610950>, <@&883689152439279659>]'),
(7, '608032440317116416', 'LW', 'LW@7648', '8e5c3459c61ad4c2ddadc2069da13f46', '[<@&869163811775610950>]'),
(8, '463253353506406401', 'Santiago', '! ShaUrMa@0073', '0fcbc09981876800b2a070ddc9b37e3a', '[<@&869163811775610950>]'),
(9, '159985870458322944', 'MEE6', 'MEE6@4876', 'b50adff099924dd5e6b72d13f77eb9d7', '[<@&875047795998998679>, <@&950145087109750844>]'),
(10, '1003806438377930842', 'waldemar', 'waldemar@3917', '2d232f741f8e209e56b17404e5882800', '[<@&868133526820769803>]'),
(11, '548516618767171585', 'Skava', 'Skava@2627', 'fa077e6f3dcbc3c6ce8027d9d46fa855', '[<@&869163811775610950>]'),
(12, '343339732975091714', 'Charles Martinez', 'kite@8999', 'ef9d59269092ab955211d6c3e02f1e86', '[<@&1100793541451587594>, <@&1100793605771251782>]'),
(13, '434555379259670528', 'Vasabik', 'Vasabik@7777', 'a_c4403fef1efd9b03a5e876cd3360bd99', '[<@&773162187664523275>, <@&786669269206433842>, <@&848551987237748816>, <@&867882209582252103>, <@&986347816299417642>, <@&1095380462991581335>]'),
(14, '685495220057538562', 'Tom', '_FoXz_@7038', '0b72e036d68b6c4d99e105227c08cfd4', '[<@&869163811775610950>]'),
(15, '555383948067340304', 'Lisa Hagaroma', 'Natrix@5918', 'ad4a770e02174be3d9a6442af68119fe', '[<@&786669269206433842>]'),
(16, '449960522083991552', 'Fedor', 'Fedor@1073', 'ecf6e60e9a6a70eea3aee6f7437b8cee', '[<@&786669269206433842>, <@&847905861342199888>, <@&1036019427168223314>]'),
(17, '419768143293186058', 'Neron111', 'Neron111@3920', 'd7c0ace89c110f6ea17e2db540c64fd3', '[<@&869163811775610950>]'),
(18, '184405311681986560', 'FredBoat', 'FredBoat♪♪@7284', '7e25f540b31d70360e69fea14dbd865a', '[<@&950145087109750844>]'),
(19, '630355283172130837', 'William', '//@4257', 'a_e467f462d9a582899b1a4ca6a29ca1cc', '[<@&773162187664523275>, <@&786669269206433842>, <@&1003645290894598174>]'),
(20, '544900231012155393', 'Julian', 'fl1x@0170', '462af809bf04a21331d43e9bae203252', '[<@&869163811775610950>]'),
(21, '1020453127511621682', 'shota', 'shotanw@1391', '9e9cb306d74a3f6ac8cce354b08a3dac', '[<@&869163811775610950>]'),
(22, '960267917088411679', 'AS', 'KITE-BOT@5614', '9051f34b024a3add373d74df462c862d', '[<@&950145087109750844>, <@&1096521674180014181>]'),
(23, '715990934919184394', 'Aloha/Hattori', 'bulba@9571', '6dd1431e8afc8c59aedd2af85d49cbda', '[<@&786669269206433842>, <@&867882209582252103>, <@&883689152439279659>]'),
(24, '447777980752592906', 'Trip Hagaroma', 'tr1pzex@9946', '9209aff5864cc87666f052171b926832', '[<@&786669269206433842>, <@&883689152439279659>, <@&1003645290894598174>]'),
(25, '541282033855365130', 'Mashiro', 'Maivle@9623', 'c2b3aa698f84ed153b4dc8b7bec788d1', '[<@&868133526820769803>]'),
(26, '880554644965851197', 'Киря', 'Киря@4884', 'bb116908b31611daf6bb3c049a67663d', '[<@&869163811775610950>]'),
(27, '375371495251116035', 'Vito Disaute', 'Vilsq@1371', '7b800351bebc754c819b222492b5963a', '[<@&860601263543287900>, <@&1039645281010057366>]'),
(28, '777280870582583306', 'малина', 'малина@6666', 'a_2e4624dc0b819ac9519cdfb3cc20bca5', '[<@&869163811775610950>, <@&883689152439279659>]'),
(29, '397655391963447306', 'Slowfast', 'UHKACAT0P@6737', 'b34273cfd4b2d5e53cae671d09d960e8', '[<@&786669269206433842>, <@&868133526820769803>, <@&1003645290894598174>]'),
(30, '521346150570393600', 'Espaniolan', 'NEGAT!VE@3945', 'ff0b23f6928b53b406f38b4fec5be980', '[<@&786669269206433842>, <@&1003645290894598174>]'),
(31, '419193054184996866', 'awsi', 'awsi@6202', '22ce1b036ab3d6603fda690f5d723fd3', '[<@&869163811775610950>]'),
(32, '614109280508968980', 'Chip', 'Chip@4145', 'c3034a729ea702c79c86cb4a5ab6eb1c', '[<@&888360811855245313>, <@&950145087109750844>]'),
(33, '880396288879902720', 'Razer', 'Razer@2626', '09c22cef0466e33d5f29052700671cfd', '[<@&869163811775610950>]'),
(34, '301409008802070538', 'Jules', 'gesh1@8078', '299824aa89d08720246ead150000d715', '[<@&868133526820769803>]'),
(35, '315170827546918915', 'Armen Hagaroma', 'Blessed@7780', '8b5d0fce5d951e89b225b9f72452f544', '[<@&786669269206433842>, <@&883689152439279659>]'),
(36, '658000806288818198', 'Dimarik', '_YUNG_HEFNER_@8314', 'a500f67bdc461a04f85e626dc7295903', '[<@&868133526820769803>, <@&883689152439279659>]'),
(37, '375371492537663490', 'Santilla Disaute', 'SANT1LLA@9568', 'fc41b12f55e954b09f30eeca3744a804', '[<@&860601263543287900>, <@&1039645281010057366>]'),
(38, '743432450700476436', 'Maloy', 'крокант@1566', 'd7cd111712b011ce400e9af0477f1dc7', '[<@&786669269206433842>, <@&1039645281010057366>]'),
(39, '311152964373053473', 'Kent', 'xz@9487', '58cd1d8c14b135ea0ba309f4ce7111d3', '[<@&786669269206433842>, <@&867882209582252103>, <@&883689152439279659>]'),
(40, '748737024877527041', 'BINKA youtube', 'BINKA youtube@6408', '213ebd9b6091e7fc9b4f1d5188b37a97', '[<@&869163811775610950>]'),
(41, '343750191339405312', 'Rey', '.Rey@3520', 'a7c7d6870e93bcf1ecd832d0a681e19a', '[<@&868133526820769803>]'),
(42, '1054842841022603284', 'Dimarik Hagaroma', 'Адик из фиксиков@0333', '8d19ddf3e41bf98437eeb9466ab25ef2', '[<@&867882209582252103>, <@&952652605543313458>, <@&1076916697786744882>]'),
(43, '581539103762284574', 'Marchosias Hagaroma', 'Yoker@6666', 'a_08c98e10a2ee2ca5e58b7ec22d0d9db7', '[<@&786669269206433842>, <@&883689152439279659>, <@&952652605543313458>]'),
(44, '369208607126061057', '24/7 🔊', '24/7 🔊@6493', '28f5d039716e33cf4b059a8c9426bbf6', '[<@&897080896816046092>, <@&950145087109750844>]'),
(45, '563684573456629800', 'Ferrari Hagaroma', 'ferrari@4444', 'a_852088d5811e6a017f4f17da0ef6fcc9', '[<@&786669269206433842>]'),
(46, '511786918783090688', 'MafiaBot', 'MafiaBot@7060', '81b4f3c332867a8921df67cebad79759', '[<@&942164468463464503>, <@&950145087109750844>]'),
(47, '533718938585137162', 'Jackie', 'razyk@3230', '2346973a091b5bd86fe41600326ae24f', '[<@&866563420810641421>, <@&867882209582252103>, <@&868133526820769803>, <@&896744534212509737>]'),
(48, '826016330112696340', 'Brown Hagaroma', '💔𝘽𝙧𝙤𝙬𝙣💔@1337', 'a_70e62a4235d3a6881e9433fdb8fe8673', '[<@&786669269206433842>, <@&1003645290894598174>]'),
(49, '411143545836011520', 'Akashi', 'purinovan@5656', 'd9614e7f9f1e3bd78551881c693eb6d0', '[<@&786669269206433842>, <@&1003645290894598174>]'),
(50, '664172276215971869', '𝕸𝖎𝖓𝖆𝖙𝖔 𝕳𝖆𝖌𝖆𝖗𝖔𝖒𝖆', '𝖝_𝕸𝖎𝖓𝖆𝖙𝖔_𝖝@0396', '787e205c9ca8b6fa7da512077a34b77b', '[<@&786669269206433842>, <@&952652605543313458>]'),
(51, '886310166784540713', 'Noah Hagaroma', 'Noah Hagaroma@3322', 'de62597caa9c8169069518b1d71c1a42', '[<@&786669269206433842>, <@&883689152439279659>]'),
(52, '666523822589083668', 'Oleg', 'Hinik@4930', 'c99ac4ca092998e5aaae7c3d7f516dde', '[<@&786669269206433842>, <@&1003645290894598174>]'),
(53, '925120465729630242', 'семнадцать сорок четыре', 'семнадцать сорок четыре@1744', 'a_35ca5126726b921fa5e7573a4377105c', '[<@&869163811775610950>]'),
(54, '436179755679612928', 'Berk', 'юй@7819', 'abe64e0e3a98ceb731f7f6e988743425', '[<@&860601263543287900>, <@&1036019427168223314>, <@&1039645281010057366>]'),
(55, '877542701812310047', 'Danilka', 'Dev1l@2411', 'b7c0cd79a04e94b96ab40d661a44cbb4', '[<@&786669269206433842>, <@&1039645281010057366>]'),
(56, '758009578536566938', 'Goshan', 'operskie@4350', '4fa3a96eae6fe402e0e8205e96e89c57', '[<@&786669269206433842>, <@&868133526820769803>]'),
(57, '520482742128082987', 'DUSHNILA', 'Kechi@1495', '0541a09dc1a077bf17ebb5fcce43c4f4', '[<@&869163811775610950>]'),
(58, '445635720326021130', 'Wolter', 'Folney@4741', '361cbcf9671798558dedcf037097eece', '[<@&868133526820769803>]'),
(59, '944999961689473084', 'PATOONPA', 'PATOONPA@2721', 'null', '[<@&869163811775610950>]'),
(60, '419151759471280138', 'Shin', 'kaguyaa@6666', '8a582e95ddb4ad40fa1bbc79282a84fb', '[<@&786669269206433842>, <@&883689152439279659>]'),
(61, '614028518669549568', 'Vitala', 'Фанат BMW@0228', '31bf25355ee210d8152574c0fee4125a', '[<@&786669269206433842>, <@&848551987237748816>, <@&883689152439279659>, <@&952652605543313458>]'),
(62, '447672579528851456', 'ромчик', 'ромчик@1825', '6b4855884cde5e1d38f7bb156bb634b9', '[<@&869163811775610950>]'),
(63, '298036240949706762', 'Vodnik', 'Курильщик из водного мира@0825', '7737cd55a09a3961844d335b29a8843b', '[<@&786669269206433842>, <@&867882209582252103>, <@&986347816299417642>, <@&1068933064782270526>]'),
(64, '275997943662903296', 'Дедушка', 'Макдональд@7777', 'a_8248c4c9f9f27ddae76866d053fbc9f3', '[<@&773162187664523275>, <@&786669269206433842>, <@&847905861342199888>, <@&883689152439279659>, <@&952652605543313458>, <@&1068933064782270526>]'),
(65, '1053970424993697832', 'unloshka', 'unloshka@2739', '59ec3db2474de88bd5a0ebc68f8358f4', '[<@&869163811775610950>]'),
(66, '480336425741582356', 'Ceashi', 'Ceashi@4650', '3166e2b13129f38127f69037a1905022', '[<@&786669269206433842>, <@&883689152439279659>]'),
(67, '482105304654413824', 'Yan', 'Yan Bianchi@5811', '3cb8b7b596a2e46efe3cd43243ad3e2a', '[<@&786669269206433842>, <@&867882209582252103>, <@&883689152439279659>, <@&1003645290894598174>]'),
(68, '953267882308010065', 'Kogi', 'Kogi@4163', 'null', '[<@&786669269206433842>, <@&1068933064782270526>]'),
(69, '527507377012867082', 'Susano(сися)', 'qwertyuiopasdfghjklzxcvbm@8888', 'a_4e4e6dd6e6fe1a32484817aa41c0fde4', '[<@&773162187664523275>, <@&786669269206433842>, <@&1003645290894598174>]'),
(70, '594875424719241226', 'Kinkong', 'yupick@6666', 'a_3a688a5866ec6ea25220425c08860a1e', '[<@&786669269206433842>, <@&883689152439279659>, <@&1095380462991581335>]'),
(71, '986932685475827722', 'Sqwoz Hagaroma', 'OFAJDSNHKJFI@2463', 'e66c8b90dcbe11ea90f09ae28085b41d', '[<@&868133526820769803>]'),
(72, '708794893962706955', 'Raze Neutral', 'Raze AMG@1397', '13eb574f067322b7e708a4715bc5041c', '[<@&869163811775610950>]'),
(73, '930043443873468426', 'Протеин', '.wern@6793', 'fe0e42657280e0eba978e92c5da5f234', '[<@&869163811775610950>]'),
(74, '698121210957135882', 'Killa (Gromoboi)', 'Rize@9367', '6b928cfabcc867ce659914c518d16e81', '[<@&786669269206433842>, <@&883689152439279659>]'),
(75, '585015818698489857', 'okok', 'okok@1481', 'b0a4578946d037df352c23e693671e38', '[<@&869163811775610950>]'),
(76, '606128614534021132', 'Kawaragi', 'kawaragi@3287', 'b6dd5a83e14c839555103cf00236f70e', '[<@&869163811775610950>]'),
(101, '523095417148276766', 'Larrykiks', 'Larrykiks#2086', 'f6d619656d686845efa3e1fab2fa5481', '[<@&1100793541451587594>, <@&1100793605771251782>]'),
(102, '1042352621681393674', 'Batya Hagaroma', 'Артем.#8900', 'acab0467df05c0aa9d9983a775bfd81b', '[<@&860601263543287900>, <@&1039645281010057366>]');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `structure_hagaroma`
--
ALTER TABLE `structure_hagaroma`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `structure_hagaroma`
--
ALTER TABLE `structure_hagaroma`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;