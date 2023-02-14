-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Waktu pembuatan: 17 Jan 2023 pada 07.22
-- Versi server: 5.7.34
-- Versi PHP: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lv`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `settings`
--

CREATE TABLE `settings` (
  `id` int(10) NOT NULL,
  `setting_name` varchar(255) NOT NULL DEFAULT '',
  `setting_type` varchar(50) NOT NULL,
  `setting_value` longtext NOT NULL,
  `setting_explain` varchar(255) NOT NULL,
  `setting_status` int(11) NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL,
  `deleted_at` timestamp NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `settings`
--

INSERT INTO `settings` (`id`, `setting_name`, `setting_type`, `setting_value`, `setting_explain`, `setting_status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(0, 'meta_title', 'meta', 'King Kost', 'Website Meta Title', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'meta_keyword', 'meta', 'Code Apps', 'Website Meta Keyword', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'meta_desc', 'meta', 'Code Apps', 'Website Meta Desc', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'meta_robots', 'meta', 'User-agent: *Disallow:Sitemap: http://kingkost.com/sitemap.xml', 'Meta Robots', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'dashboard_alert', 'menu_dashboard', 'Dashboard Alert', 'Menu Dashboard Alert', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'dashboard_contact', 'menu_dashboard', 'Contact List', 'Menu Contact List', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'dashboard_menu', 'menu_dashboard', 'Dashboard Menu', 'Menu Dashboard', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'post_menu', 'menu_post', 'Post Menu', 'Menu Post', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'pages_menu', 'menu_pages', 'Pages Menu', 'Menu Pages', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'hidden_pages_menu', 'menu_hidden_pages', 'Hidden Pages Menu', 'Menu Hidden Pages', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'comment_menu', 'menu_comment', 'Comment Menu', 'Menu Comment', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'contact_menu', 'menu_contact', 'Contact Menu', 'Menu Contact', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'banner_menu', 'menu_banner', 'Banner Menu', 'Menu Banner', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'slideshow_menu', 'menu_slideshow', 'Slideshow Menu', 'Menu Slideshow', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'media_menu', 'menu_media', 'Media Menu', 'Menu Media', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'member_menu', 'menu_member', 'Member Menu', 'Menu Member', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'themes_menu', 'menu_themes', 'Themes Menu', 'Menu Themes', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'setting_menu', 'menu_setting', 'Setting Menu', 'Menu Setting', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'setting_verified', 'menu_setting', 'Setting Verified', 'Menu Setting Verified', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'setting_visitor', 'menu_setting', 'Setting Visitor', 'Menu Setting Visitor', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'setting_meta', 'menu_setting', 'Setting Meta', 'Menu Setting Meta', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'setting_contact', 'menu_setting', 'Setting Contact', 'Menu Setting Contact', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'setting_social_network', 'menu_setting', 'Setting Social Network', 'Menu Setting Social Network', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'setting_robots', 'menu_setting', 'Setting Robots', 'Menu Setting Robots', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'themes_admin', 'themes', 'default', 'Administrator Themes', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'themes_user', 'themes', 'cosine', 'Website Themes', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'itype', 'filestype', 'jpg,jpeg,bmp,gif,png', 'Images Type', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'ftype', 'filestype', 'aac,ai,aiff,avi,bmp,c,cpp,css,dat,dmg,doc,docx,dotx,dwg,dxf,eps,exe,flv,gif,h,hpp,html,ics,iso,java,jpg,js,key,less,mid,mp3,mp4,mpg,odf,ods,odt,otp,ots,ott,pdf,php,png,ppt,pptx,psd,py,qt,rar,rb,rtf,sass,scss,sql,tga,tgz,tiff,txt,wav,xls,xlsx,xml,yml,zip,webm,tar.gz,gz', 'Files Type', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'panel', 'panel', 'panel', 'Setting for Admin URL', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'unzip', 'zip', 'unzip', 'Support Upload & Unzip', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'images_post', 'images', '750,,,,,,,,,,,,,,,,,,,,,,,', 'Post Images Width & Heigh Size', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'images_pages', 'images', '750,,,,,,,,,,,,,,,,,,,,,,,', 'Pages Images Width & Heigh Size', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'images_sl', 'images', ',,,,,,,,,,,,,,,,,,,,,,,', 'Slideshow Images Width & Heigh Size', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'images_hidden', 'images', ',,,,,,,,,,,,,,,,,,,,,,,', 'Hidden Pages Images Width & Heigh Size', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'images_hotel', 'images', ',,,,,,,,,,,,,,,,,,,,,,,', 'Hotel Pages Images Width & Heigh Size', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'support', 'division', 'Support', 'Contact for Support Division', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'hrd', 'division', 'HRD', 'Contact for HRD Division', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'marketing', 'division', 'Marketing', 'Contact for Marketing Division', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'amazon', 'social', '', 'Amazon', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'android', 'social', '', 'Android', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'apple', 'social', '', 'Apple', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'badoo', 'social', '', 'Badoo', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'behance', 'social', '', 'Behance', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'blogger', 'social', '', 'Blogger', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'deviantart', 'social', '', 'Deviantart', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'dribbble', 'social', '', 'Dribbble', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'dropbox', 'social', '', 'Dropbox', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'e-mail', 'social', '', 'E-mail', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'evernote', 'social', '', 'Evernote', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'facebook', 'social', 'kingkost', 'Facebook', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'facebook_page', 'social', '', 'Facebook Page', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'feedburner', 'social', '', 'Feedburner', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'flickr', 'social', '', 'Flickr', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'forrst', 'social', '', 'Forrst', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'foursquare', 'social', '', 'Foursquare', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'github', 'social', '', 'Github', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'goodreads', 'social', '', 'Goodreads', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'google_plus', 'social', 'https://plus.google.com/', 'Google Plus', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'instagram', 'social', 'kingkost', 'Instagram', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'instapaper', 'social', '', 'Instapaper', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'ios', 'social', '', 'Ios', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'joli_cloud', 'social', '', 'Joli Cloud', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'last_fm', 'social', '', 'Last fm', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'linkedin', 'social', '', 'Linkedin', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'myspace', 'social', '', 'Myspace', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'picasa', 'social', '', 'Picasa', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'pinboard', 'social', '', 'Pinboard', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'pinterest', 'social', '', 'Pinterest', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'playstation', 'social', '', 'Playstation', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'posterous_spaces', 'social', '', 'Posterous Spaces', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'quora', 'social', '', 'Quora', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'readability', 'social', '', 'Readability', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'read_it_later', 'social', '', 'Read_it_later', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'rss', 'social', '', 'rss', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'skitch', 'social', '', 'Skitch', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'skype', 'social', '', 'Skype', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'spotify', 'social', '', 'Spotify', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'stumbleupon', 'social', '', 'Stumbleupon', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'tumblr', 'social', '', 'Tumblr', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'twitter', 'social', 'kingkost', 'Twitter', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'tripadvisor', 'social', '', 'Tripadvisor', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'vimeo', 'social', '', 'Vimeo', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'vine', 'social', '', 'Vine', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'windows', 'social', '', 'Windows', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'wordpress', 'social', '', 'Wordpress', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'xbox', 'social', '', 'Xbox', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'xing', 'social', '', 'Xing', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'yahoo', 'social', '', 'Yahoo', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'yelp', 'social', '', 'Yelp', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'youtube', 'social', '', 'Youtube', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'zoo_tool', 'social', '', 'Zoo Tool', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'social_network', 'social_setting', 'youtube,facebook', 'Setting for Social Network', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c1_phone_1', 'company_1', '0811-265-1507', 'Phone 1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c1_phone_2', 'company_1', '', 'Phone 2', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c1_fax_1', 'company_1', '', 'Fax 1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c1_mobile_1', 'company_1', '0811-265-1507', 'Mobile 1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c1_mobile_2', 'company_1', '', 'Mobile 2', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c1_email_1', 'company_1', 'info@kingkost.com', 'Email 1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c1_email_2', 'company_1', '', 'Email 2', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c1_fullname', 'company_1', '', 'Fullname', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c1_company', 'company_1', 'King Kost', 'Company', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c1_address', 'company_1', 'Villa Candi Gebang No. B3 RT 06 RW 44, Wedomartani, Ngemplak, Sleman, Yogyakarta 55584', 'Address', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c1_map', 'company_1', '', 'Map', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'setting_home', 'menu_setting', 'Setting Home', 'Menu Home', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c2_phone_1', 'company_2', '', 'Phone 1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c2_phone_2', 'company_2', '', 'Phone 2', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c2_fax_1', 'company_2', '', 'Fax 1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c2_mobile_1', 'company_2', '', 'Mobile 1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c2_mobile_2', 'company_2', '', 'Mobile 2', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c2_email_1', 'company_2', '', 'Email 1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c2_email_2', 'company_2', '', 'Email 2', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c2_fullname', 'company_2', '', 'Fullname', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c2_company', 'company_2', '', 'Company', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c2_address', 'company_2', '', 'Address', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c2_map', 'company_2', '', 'Map', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c3_phone_1', 'company_3', '', 'Phone 1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c3_phone_2', 'company_3', '', 'Phone 2', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c3_fax_1', 'company_3', '', 'Fax 1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c3_mobile_1', 'company_3', '', 'Mobile 1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c3_mobile_2', 'company_3', '', 'Mobile 2', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c3_email_1', 'company_3', '', 'Email 1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c3_email_2', 'company_3', '', 'Email 2', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c3_fullname', 'company_3', '', 'Fullname', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c3_company', 'company_3', '', 'Company', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c3_address', 'company_3', '', 'Address', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c3_map', 'company_3', '', 'Map', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c4_phone_1', 'company_4', '', 'Phone 1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c4_phone_2', 'company_4', '', 'Phone 2', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c4_fax_1', 'company_4', '', 'Fax 1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c4_mobile_1', 'company_4', '', 'Mobile 1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c4_mobile_2', 'company_4', '', 'Mobile 2', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c4_email_1', 'company_4', '', 'Email 1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c4_email_2', 'company_4', '', 'Email 2', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c4_fullname', 'company_4', '', 'Fullname', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c4_company', 'company_4', '', 'Company', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c4_address', 'company_4', '', 'Address', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c4_map', 'company_4', '', 'Map', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'setting_company_1', 'company', 'Tab Company 1', 'Tab Company 1', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'setting_company_2', 'company', 'Tab Company 2', 'Tab Company 2', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'setting_company_3', 'company', 'Tab Company 3', 'Tab Company 3', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'setting_company_4', 'company', 'Tab Company 4', 'Tab Company 4', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'post', 'media', 'Images', 'Images Files Type', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'post_icon', 'media', 'Icon', 'Icon Files Type', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'post_thumb', 'media', 'Thumbnail', 'Thumb Files Type', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'post_background', 'media', 'Background', 'Background Files Type', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'post_pdf', 'media', 'PDF', 'PDF Files Type', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'post_files', 'media', 'Files', 'All Files Type', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'post_link', 'media', 'Link', 'Link Media Type', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'banner', 'media', 'Banner', 'Banner Media Type', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'company', 'backend', 'Pixel CO Studios', 'Setting Footer Company Name', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'mail_password', 'payment_setting', '', 'Mail Password', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'merchant_code', 'payment_setting', 'D12027', 'Merchant Code from Duitku', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c1_blackberry', 'company_1', '', 'Blackberry Messenger', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c1_line', 'company_1', '', 'Line Messenger', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'mail_hostname', 'payment_setting', 'mail.phytoglucol.co.id', 'Mail Hostname', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'mail_port', 'payment_setting', '25', 'Mail Port', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'deposit', 'property', '200000', 'Money Deposit', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c1_email_3', 'company_1', '', 'Email 3', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c1_email_4', 'company_1', '', 'Email 4', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'affiliate', 'affiliate', '20', 'Affiliate a', 1, '2020-09-20 03:41:49', '2020-09-20 03:41:49', '2020-09-20 03:41:49'),
(0, 'email_host', 'email', 'smpt.gmail.com', 'SMTP Host', 1, '2020-12-30 15:53:28', '2020-12-30 15:53:28', '2020-12-30 15:53:28'),
(0, 'email_port', 'email', '465', 'SMTP port', 1, '2020-12-30 15:53:28', '2020-12-30 15:53:28', '2020-12-30 15:53:28'),
(0, 'email_encryption', 'email', 'ssl', 'Encryption', 1, '2020-12-30 15:53:28', '2020-12-30 15:53:28', '2020-12-30 15:53:28'),
(0, 'email_username', 'email', 'gleenid@gmail.com', 'SMTP Username', 1, '2020-12-30 15:53:28', '2020-12-30 15:53:28', '2020-12-30 15:53:28'),
(0, 'email_password', 'email', 'arwendraadiputra', 'SMTP Password', 1, '2020-12-30 15:53:28', '2020-12-30 15:53:28', '2020-12-30 15:53:28'),
(0, 'form_email', 'email', 'info@pixelcostudios.com', 'From Email', 1, '2020-12-30 15:53:28', '2020-12-30 15:53:28', '2020-12-30 15:53:28'),
(0, 'form_name', 'email', 'Gleen Ferdinand', 'From Name', 1, '2020-12-30 15:53:28', '2020-12-30 15:53:28', '2020-12-30 15:53:28'),
(0, 'mail_username', 'payment_setting', 'info@phytoglucol.co.id', 'Mail Username', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'atm', 'payment', '6500', 'Charge Of ATM Bersama', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'credit_card', 'payment', '2500', 'Charge Of Credit Card', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'virtual_account', 'payment', '5000', 'Charge Of Virtual Account', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'merchant_key', 'payment_setting', 'b0cf934abd476d624931f00a4dce3e83', 'Merchant Key from Duitku', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'merchant_code_live', 'payment_setting', 'D11060', 'Merchant Code Live from Duitku', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'merchant_key_live', 'payment_setting', '04e8b289a351e20a160f9730e06a971c', 'Merchant Key Live from Duitku', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'url_callback', 'payment_setting', 'https://kingkost.com/callback/development', 'URL Callback to Duitku', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'url_return', 'payment_setting', 'https://kingkost.com/callback/status', 'URL Return to Duitku', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'url_callback_live', 'payment_setting', 'https://kingkost.com/callback/production', 'URL Callback Live to Duitku', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'url_return_live', 'payment_setting', 'https://kingkost.com/callback/status', 'URL Return Live to Duitku', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'merchant_type', 'payment_setting', 'development', 'Type Duitku', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'shipping_key', 'payment_shipping', 'a60d4239fb717c7591b49ebe8d09bdc1', 'Tracking API Code', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'shipping_origin_type', 'payment_shipping', 'subdistrict', 'Shipping Origin Type', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'shipping_destination', 'payment_shipping', '2090', 'Shipping Destination ID', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'shipping_destination_type', 'payment_shipping', 'subdistrict', 'Shipping Destination Type', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'shipping_courier', 'payment_shipping', 'jne:pos:tiki', 'Shipping Courier', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'shipping_cost', 'payment_shipping', '30000', 'Default Shipping Cost', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'shipping_cost_margin', 'payment_shipping', '5000', 'Shipping Cost Margin', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'deposit_ac', 'property', '350000', 'Money Deposit AC', 1, '2022-04-17 03:03:14', '2022-04-17 03:03:14', '2022-04-17 03:03:14'),
(0, 'merchant_code_mobile', 'payment_setting', 'D12028', 'Merchant Code Live from Duitku', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'merchant_key_mobile', 'payment_setting', '0537873604928a2b1adb084018e1d4b5', 'Merchant Key Live from Duitku', 1, '2020-12-30 15:53:28', '2020-12-30 15:53:28', '2020-12-30 15:53:28'),
(0, 'url_callback_mobile', 'payment_setting', 'https://kingkost.com/callback/mobile', 'URL Callback to Duitku', 1, '2020-12-30 15:53:28', '2020-12-30 15:53:28', '2020-12-30 15:53:28'),
(0, 'url_return_mobile', 'payment_setting', 'https://kingkost.com/callback/mobile_status', 'URL Return to Duitku', 1, '2020-12-30 15:53:28', '2020-12-30 15:53:28', '2020-12-30 15:53:28'),
(0, 'c1_whatsapp', 'company_1', '08112651507', 'Whatsapp', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'c2_whatsapp', 'company_2', '08112651507', 'Whatsapp', 1, '2020-12-30 15:53:28', '2020-12-30 15:53:28', '2020-12-30 15:53:28'),
(0, 'c3_whatsapp', 'company_3', '08112651507', 'Whatsapp', 1, '2020-12-30 15:53:28', '2020-12-30 15:53:28', '2020-12-30 15:53:28'),
(0, 'c4_whatsapp', 'company_4', '08112651507', 'Whatsapp', 1, '2020-12-30 15:53:28', '2020-12-30 15:53:28', '2020-12-30 15:53:28'),
(0, 'presence_start', 'presence', '08:00:00', 'Jam Mulai Masuk Kantor', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(0, 'presence_end', 'presence', '17:00:00', 'Jam Pulang Kantor', 1, '2022-05-26 03:01:59', '2022-05-26 03:01:59', '2022-05-26 03:01:59'),
(0, 'category_post', 'category_type', 'Post', 'Category Type Post', 1, '2023-01-16 12:23:02', '2023-01-16 12:23:02', '2023-01-16 12:23:02'),
(0, 'category_hotel', 'category_type', 'Hotel', 'Category Type Hotel', 1, '2023-01-16 12:23:02', '2023-01-16 12:23:02', '2023-01-16 12:23:02'),
(0, 'category_slideshow', 'category_type', 'Slideshow', 'Category Type Slideshow', 1, '2023-01-16 12:23:02', '2023-01-17 07:17:02', '2023-01-16 12:23:02'),
(0, 'category_testimonial', 'category_type', 'Testimonial', 'Testimonial', 1, '2023-01-16 12:23:02', '2023-01-17 07:16:46', '2023-01-16 12:23:02');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`setting_name`),
  ADD UNIQUE KEY `setting_name` (`setting_name`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
