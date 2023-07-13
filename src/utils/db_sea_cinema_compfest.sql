-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 12 Jul 2023 pada 08.14
-- Versi server: 10.4.19-MariaDB
-- Versi PHP: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_sea_cinema_compfest`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `authentications`
--

CREATE TABLE `authentications` (
  `token` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `authentications`
--

INSERT INTO `authentications` (`token`) VALUES
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjg4NTExMDgwfQ.aEuJqOJl03bQEEW3wIiFNtvYJzkAcqXJH7qMHplOcj0'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjg4NjAzODg0fQ.a1U0S5h4ikJuQFkuDalFRhHZIyI4qvVkpT5qV_UoTGY'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjg4NjA0ODg5fQ.obeHwOrpvQ0gRTUJzdwDSNXvN_jyW7pZsRoWXbsM0wc'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjg4NjA0OTI4fQ.DDvzrlanZGcd0L8haNxaGfP1oEv7_73T03bJ2QZeI5Y'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjg4NjA1MjE1fQ.7WvvvCI1L25tJiATWqDUViquCh95HOnLgTbTEoj02k0'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjg4NjA1MjQ0fQ.AWqX4DTsiaL9I2GuXGVjC8iV4Ki7_CEG5TxaEdlFHtY'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjg4NjI2MDQwfQ.3uI21crDa1tDubTFMh87qA3U1sqDPGNwAR6w1rHbmPE'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjg4NjI2MDQ1fQ.1HB9R4cMSr8fNGS8Ss3tHD49n3kbjc_4ZEfhNtI_ur4'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjg4Njg3NzQyfQ.cCkBpkWMe_w9eGYaPwW2Bvl5lKzzOA95gKRYCpMomLc'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjg4NzM2MTk4fQ.CGS7Gl8nrjngUtH8rinUpHgOJFAMgoCbw29icSuWJgc'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjg5MDUxMjUxfQ.o0C7WN66zYWjN4TQue_AhW23n5yVRt_3V2QfleMH3Vc'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjg5MDUzMTg0fQ.OunMwbY2MlXoEqL097bk0xsc6-qS7OCvA08gaMl-uGo'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjg5MDU5Nzc5fQ.LbfiIq5odq60vKxW7IsYzlIMFTjT0BOzts2qGnbHyrM'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjg5MTMyNTEyfQ.5bB8eDvO9nzMjKvFTZ0hp198i5_ZKTm8plqquLG4Zws'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjg5MTMzMDk1fQ.1HtwMzkXy5BYla2rWV5CO691YdecFcyv4vRPPDmSjM4'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjg5MTM0OTM1fQ.3JaUdZnB7sGwxqCYJK6zEN5MTHtGaEcJTfG23YyafSo'),
('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjg5MTM5NTM5fQ.dx0HmOaIuWabZnqsS8-BunQel6B-BUBq1ppG0qHztn4');

-- --------------------------------------------------------

--
-- Struktur dari tabel `balance`
--

CREATE TABLE `balance` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `balance`
--

INSERT INTO `balance` (`id`, `id_user`, `amount`) VALUES
(1, 2, 2080000),
(2, 3, 1300000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `balance_history`
--

CREATE TABLE `balance_history` (
  `id` int(11) NOT NULL,
  `id_balance` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `status` enum('topup','withdraw','booked','unbooked') NOT NULL,
  `createdAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `balance_history`
--

INSERT INTO `balance_history` (`id`, `id_balance`, `amount`, `status`, `createdAt`) VALUES
(3, 1, 300000, 'topup', '2023-07-07 06:15:03'),
(4, 1, 300000, 'withdraw', '2023-07-12 06:15:03'),
(5, 1, 500000, 'topup', '2023-07-12 06:21:25'),
(6, 1, 500000, 'withdraw', '2023-07-12 06:22:06'),
(7, 1, 500000, 'withdraw', '2023-07-12 06:22:08'),
(14, 2, 500000, 'topup', '2023-07-12 06:47:43'),
(15, 2, 1500000, 'topup', '2023-07-12 06:47:53'),
(16, 2, 500000, 'topup', '2023-07-12 08:19:39'),
(17, 2, 400000, 'withdraw', '2023-07-12 10:29:05'),
(18, 2, 106000, 'booked', '2023-07-12 10:49:12'),
(19, 2, 106000, 'unbooked', '2023-07-12 10:50:16'),
(20, 2, 106000, 'booked', '2023-07-12 11:09:14'),
(21, 2, 500000, 'withdraw', '2023-07-12 11:09:34'),
(22, 2, 82000, 'booked', '2023-07-12 11:47:36'),
(23, 2, 106000, 'unbooked', '2023-07-12 11:47:49'),
(24, 2, 82000, 'unbooked', '2023-07-12 11:47:51'),
(25, 2, 400000, 'topup', '2023-07-12 11:52:23'),
(26, 2, 500000, 'withdraw', '2023-07-12 11:54:11'),
(27, 2, 600000, 'topup', '2023-07-12 11:54:17'),
(28, 2, 300000, 'booked', '2023-07-12 11:56:02');

-- --------------------------------------------------------

--
-- Struktur dari tabel `booked`
--

CREATE TABLE `booked` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_movie` int(11) NOT NULL,
  `total_cost` int(11) NOT NULL,
  `payment_status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `booked`
--

INSERT INTO `booked` (`id`, `id_user`, `id_movie`, `total_cost`, `payment_status`) VALUES
(70, 3, 2, 300000, 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `title` varchar(30) NOT NULL,
  `description` varchar(300) NOT NULL,
  `release_date` date NOT NULL,
  `poster_url` varchar(200) NOT NULL,
  `age_rating` int(2) NOT NULL,
  `ticket_price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `movies`
--

INSERT INTO `movies` (`id`, `title`, `description`, `release_date`, `poster_url`, `age_rating`, `ticket_price`) VALUES
(1, 'Fast X', 'Dom Toretto dan keluarganya menjadi sasaran putra gembong narkoba Hernan Reyes yang pendendam.', '2023-05-17', 'https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg', 15, 53000),
(2, 'John Wick: Chapter 4', 'John Wick mengungkap jalan untuk mengalahkan The High Table. Tapi sebelum dia bisa mendapatkan kebebasannya, Wick harus berhadapan dengan musuh baru dengan aliansi kuat di seluruh dunia dan kekuatan yang mengubah teman lama menjadi musuh.', '2023-03-22', 'https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg', 10, 60000),
(3, 'The Super Mario Bros. Movie', 'Ketika sedang bekerja di bawah tanah untuk memperbaiki pipa air, Mario dan Luigi, yang merupakan tukang ledeng dari Brooklyn, tiba-tiba terhisap ke dalam pipa misterius dan masuk ke dunia yang sangat berbeda. Mereka berada di tempat yang ajaib dan aneh. Tapi sayangnya, mereka terpisah satu sama lain', '2023-04-05', 'https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg', 14, 49000),
(4, 'Avatar: The Way of Water', 'Jake Sully tinggal bersama keluarga barunya di planet Pandora. Setelah ancaman kembali datang, Jake harus bekerja dengan Neytiri dan pasukan ras Na\'vi untuk melindungi planet mereka.', '2022-12-14', 'https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg', 12, 53000),
(5, 'Guardians of the Galaxy Vol. 3', 'Peter Quill masih trauma karena kehilangan Gamora. Ia perlu mengumpulkan timnya untuk melindungi alam semesta dan salah satu anggota mereka. Jika mereka gagal, Guardian akan berakhir.', '2023-05-03', 'https://image.tmdb.org/t/p/w500/nAbpLidFdbbi3efFQKMPQJkaZ1r.jpg', 12, 41000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `seats`
--

CREATE TABLE `seats` (
  `id` int(11) NOT NULL,
  `id_movie` int(11) NOT NULL,
  `seat_code` varchar(5) NOT NULL,
  `isBooked` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `seats`
--

INSERT INTO `seats` (`id`, `id_movie`, `seat_code`, `isBooked`) VALUES
(145, 1, '01', 0),
(146, 1, '02', 0),
(147, 1, '03', 0),
(148, 1, '04', 0),
(149, 1, '05', 0),
(150, 1, '06', 0),
(151, 1, '07', 0),
(152, 1, '08', 0),
(153, 1, '09', 0),
(154, 1, '10', 0),
(155, 1, '11', 0),
(156, 1, '12', 0),
(157, 1, '13', 0),
(158, 1, '14', 0),
(159, 1, '15', 0),
(160, 1, '16', 0),
(161, 1, '17', 0),
(162, 1, '18', 0),
(163, 1, '19', 0),
(164, 1, '20', 0),
(165, 1, '21', 0),
(166, 1, '22', 0),
(167, 1, '23', 0),
(168, 1, '24', 0),
(169, 1, '25', 0),
(170, 1, '26', 0),
(171, 1, '27', 0),
(172, 1, '28', 0),
(173, 1, '29', 0),
(174, 1, '30', 0),
(175, 1, '31', 0),
(176, 1, '32', 0),
(177, 1, '33', 0),
(178, 1, '34', 0),
(179, 1, '35', 0),
(180, 1, '36', 0),
(181, 1, '37', 0),
(182, 1, '38', 0),
(183, 1, '39', 0),
(184, 1, '40', 0),
(185, 1, '41', 0),
(186, 1, '42', 0),
(187, 1, '43', 0),
(188, 1, '44', 0),
(189, 1, '45', 0),
(190, 1, '46', 0),
(191, 1, '47', 0),
(192, 1, '48', 0),
(193, 1, '49', 0),
(194, 1, '50', 0),
(195, 1, '51', 0),
(196, 1, '52', 0),
(197, 1, '53', 0),
(198, 1, '54', 0),
(199, 1, '55', 0),
(200, 1, '56', 0),
(201, 1, '57', 0),
(202, 1, '58', 0),
(203, 1, '59', 0),
(204, 1, '60', 0),
(205, 1, '61', 0),
(206, 1, '62', 0),
(207, 1, '63', 0),
(208, 1, '64', 0),
(209, 2, '01', 0),
(210, 2, '02', 0),
(211, 2, '03', 0),
(212, 2, '04', 0),
(213, 2, '05', 0),
(214, 2, '06', 0),
(215, 2, '07', 0),
(216, 2, '08', 0),
(217, 2, '09', 0),
(218, 2, '10', 0),
(219, 2, '11', 0),
(220, 2, '12', 0),
(221, 2, '13', 0),
(222, 2, '14', 0),
(223, 2, '15', 0),
(224, 2, '16', 0),
(225, 2, '17', 0),
(226, 2, '18', 0),
(227, 2, '19', 0),
(228, 2, '20', 0),
(229, 2, '21', 0),
(230, 2, '22', 0),
(231, 2, '23', 0),
(232, 2, '24', 0),
(233, 2, '25', 0),
(234, 2, '26', 0),
(235, 2, '27', 0),
(236, 2, '28', 0),
(237, 2, '29', 0),
(238, 2, '30', 1),
(239, 2, '31', 1),
(240, 2, '32', 1),
(241, 2, '33', 1),
(242, 2, '34', 1),
(243, 2, '35', 0),
(244, 2, '36', 0),
(245, 2, '37', 0),
(246, 2, '38', 0),
(247, 2, '39', 0),
(248, 2, '40', 0),
(249, 2, '41', 0),
(250, 2, '42', 0),
(251, 2, '43', 0),
(252, 2, '44', 0),
(253, 2, '45', 0),
(254, 2, '46', 0),
(255, 2, '47', 0),
(256, 2, '48', 0),
(257, 2, '49', 0),
(258, 2, '50', 0),
(259, 2, '51', 0),
(260, 2, '52', 0),
(261, 2, '53', 0),
(262, 2, '54', 0),
(263, 2, '55', 0),
(264, 2, '56', 0),
(265, 2, '57', 0),
(266, 2, '58', 0),
(267, 2, '59', 0),
(268, 2, '60', 0),
(269, 2, '61', 0),
(270, 2, '62', 0),
(271, 2, '63', 0),
(272, 2, '64', 0),
(273, 3, '01', 0),
(274, 3, '02', 0),
(275, 3, '03', 0),
(276, 3, '04', 0),
(277, 3, '05', 0),
(278, 3, '06', 0),
(279, 3, '07', 0),
(280, 3, '08', 0),
(281, 3, '09', 0),
(282, 3, '10', 0),
(283, 3, '11', 0),
(284, 3, '12', 0),
(285, 3, '13', 0),
(286, 3, '14', 0),
(287, 3, '15', 0),
(288, 3, '16', 0),
(289, 3, '17', 0),
(290, 3, '18', 0),
(291, 3, '19', 0),
(292, 3, '20', 0),
(293, 3, '21', 0),
(294, 3, '22', 0),
(295, 3, '23', 0),
(296, 3, '24', 0),
(297, 3, '25', 0),
(298, 3, '26', 0),
(299, 3, '27', 0),
(300, 3, '28', 0),
(301, 3, '29', 0),
(302, 3, '30', 0),
(303, 3, '31', 0),
(304, 3, '32', 0),
(305, 3, '33', 0),
(306, 3, '34', 0),
(307, 3, '35', 0),
(308, 3, '36', 0),
(309, 3, '37', 0),
(310, 3, '38', 0),
(311, 3, '39', 0),
(312, 3, '40', 0),
(313, 3, '41', 0),
(314, 3, '42', 0),
(315, 3, '43', 0),
(316, 3, '44', 0),
(317, 3, '45', 0),
(318, 3, '46', 0),
(319, 3, '47', 0),
(320, 3, '48', 0),
(321, 3, '49', 0),
(322, 3, '50', 0),
(323, 3, '51', 0),
(324, 3, '52', 0),
(325, 3, '53', 0),
(326, 3, '54', 0),
(327, 3, '55', 0),
(328, 3, '56', 0),
(329, 3, '57', 0),
(330, 3, '58', 0),
(331, 3, '59', 0),
(332, 3, '60', 0),
(333, 3, '61', 0),
(334, 3, '62', 0),
(335, 3, '63', 0),
(336, 3, '64', 0),
(665, 4, '01', 0),
(666, 4, '02', 0),
(667, 4, '03', 0),
(668, 4, '04', 0),
(669, 4, '05', 0),
(670, 4, '06', 0),
(671, 4, '07', 0),
(672, 4, '08', 0),
(673, 4, '09', 0),
(674, 4, '10', 0),
(675, 4, '11', 0),
(676, 4, '12', 0),
(677, 4, '13', 0),
(678, 4, '14', 0),
(679, 4, '15', 0),
(680, 4, '16', 0),
(681, 4, '17', 0),
(682, 4, '18', 0),
(683, 4, '19', 0),
(684, 4, '20', 0),
(685, 4, '21', 0),
(686, 4, '22', 0),
(687, 4, '23', 0),
(688, 4, '24', 0),
(689, 4, '25', 0),
(690, 4, '26', 0),
(691, 4, '27', 0),
(692, 4, '28', 0),
(693, 4, '29', 0),
(694, 4, '30', 0),
(695, 4, '31', 0),
(696, 4, '32', 0),
(697, 4, '33', 0),
(698, 4, '34', 0),
(699, 4, '35', 0),
(700, 4, '36', 0),
(701, 4, '37', 0),
(702, 4, '38', 0),
(703, 4, '39', 0),
(704, 4, '40', 0),
(705, 4, '41', 0),
(706, 4, '42', 0),
(707, 4, '43', 0),
(708, 4, '44', 0),
(709, 4, '45', 0),
(710, 4, '46', 0),
(711, 4, '47', 0),
(712, 4, '48', 0),
(713, 4, '49', 0),
(714, 4, '50', 0),
(715, 4, '51', 0),
(716, 4, '52', 0),
(717, 4, '53', 0),
(718, 4, '54', 0),
(719, 4, '55', 0),
(720, 4, '56', 0),
(721, 4, '57', 0),
(722, 4, '58', 0),
(723, 4, '59', 0),
(724, 4, '60', 0),
(725, 4, '61', 0),
(726, 4, '62', 0),
(727, 4, '63', 0),
(728, 4, '64', 0),
(729, 5, '01', 0),
(730, 5, '02', 0),
(731, 5, '03', 0),
(732, 5, '04', 0),
(733, 5, '05', 0),
(734, 5, '06', 0),
(735, 5, '07', 0),
(736, 5, '08', 0),
(737, 5, '09', 0),
(738, 5, '10', 0),
(739, 5, '11', 0),
(740, 5, '12', 0),
(741, 5, '13', 0),
(742, 5, '14', 0),
(743, 5, '15', 0),
(744, 5, '16', 0),
(745, 5, '17', 0),
(746, 5, '18', 0),
(747, 5, '19', 0),
(748, 5, '20', 0),
(749, 5, '21', 0),
(750, 5, '22', 0),
(751, 5, '23', 0),
(752, 5, '24', 0),
(753, 5, '25', 0),
(754, 5, '26', 0),
(755, 5, '27', 0),
(756, 5, '28', 0),
(757, 5, '29', 0),
(758, 5, '30', 0),
(759, 5, '31', 0),
(760, 5, '32', 0),
(761, 5, '33', 0),
(762, 5, '34', 0),
(763, 5, '35', 0),
(764, 5, '36', 0),
(765, 5, '37', 0),
(766, 5, '38', 0),
(767, 5, '39', 0),
(768, 5, '40', 0),
(769, 5, '41', 0),
(770, 5, '42', 0),
(771, 5, '43', 0),
(772, 5, '44', 0),
(773, 5, '45', 0),
(774, 5, '46', 0),
(775, 5, '47', 0),
(776, 5, '48', 0),
(777, 5, '49', 0),
(778, 5, '50', 0),
(779, 5, '51', 0),
(780, 5, '52', 0),
(781, 5, '53', 0),
(782, 5, '54', 0),
(783, 5, '55', 0),
(784, 5, '56', 0),
(785, 5, '57', 0),
(786, 5, '58', 0),
(787, 5, '59', 0),
(788, 5, '60', 0),
(789, 5, '61', 0),
(790, 5, '62', 0),
(791, 5, '63', 0),
(792, 5, '64', 0);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tickets`
--

CREATE TABLE `tickets` (
  `id` int(11) NOT NULL,
  `id_booked` int(11) NOT NULL,
  `id_seat` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `age` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tickets`
--

INSERT INTO `tickets` (`id`, `id_booked`, `id_seat`, `name`, `age`) VALUES
(127, 70, 240, 'Cangju', 20),
(128, 70, 239, 'Faishal Zufari', 21),
(129, 70, 241, 'Yudha', 19),
(130, 70, 242, 'Arsya', 20),
(131, 70, 238, 'Zafira ', 20);

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(100) NOT NULL,
  `name` varchar(20) NOT NULL,
  `photo` varchar(100) NOT NULL,
  `age` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `name`, `photo`, `age`) VALUES
(2, 'isalzufari', '$2b$10$zkDRto4DIxMJsZtKVTLVKOM18Y.qJR0mgVaW3BuwiA2TYVMF2K7x6', 'Faishal Zufari', '', 21),
(3, 'cangju', '$2b$10$MjRYSmFav2kFutD8fb6km.NwE/YS8oSo9y.q5HUfJzTa.L5IQSkMm', 'Cangju', '', 15);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `balance`
--
ALTER TABLE `balance`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_user` (`id_user`);

--
-- Indeks untuk tabel `balance_history`
--
ALTER TABLE `balance_history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_balance` (`id_balance`);

--
-- Indeks untuk tabel `booked`
--
ALTER TABLE `booked`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_movie` (`id_movie`);

--
-- Indeks untuk tabel `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `seats`
--
ALTER TABLE `seats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_movie` (`id_movie`);

--
-- Indeks untuk tabel `tickets`
--
ALTER TABLE `tickets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_booked` (`id_booked`),
  ADD KEY `id_seat` (`id_seat`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `balance`
--
ALTER TABLE `balance`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `balance_history`
--
ALTER TABLE `balance_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT untuk tabel `booked`
--
ALTER TABLE `booked`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT untuk tabel `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `seats`
--
ALTER TABLE `seats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=793;

--
-- AUTO_INCREMENT untuk tabel `tickets`
--
ALTER TABLE `tickets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=132;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `balance`
--
ALTER TABLE `balance`
  ADD CONSTRAINT `balance_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `balance_history`
--
ALTER TABLE `balance_history`
  ADD CONSTRAINT `balance_history_ibfk_1` FOREIGN KEY (`id_balance`) REFERENCES `balance` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `booked`
--
ALTER TABLE `booked`
  ADD CONSTRAINT `booked_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `booked_ibfk_2` FOREIGN KEY (`id_movie`) REFERENCES `movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `seats`
--
ALTER TABLE `seats`
  ADD CONSTRAINT `seats_ibfk_1` FOREIGN KEY (`id_movie`) REFERENCES `movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `tickets`
--
ALTER TABLE `tickets`
  ADD CONSTRAINT `tickets_ibfk_1` FOREIGN KEY (`id_booked`) REFERENCES `booked` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tickets_ibfk_2` FOREIGN KEY (`id_seat`) REFERENCES `seats` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
