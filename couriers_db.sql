-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 23, 2024 at 12:23 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `couriers_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `couriers_tbl`
--

CREATE TABLE `couriers_tbl` (
  `id` int(11) NOT NULL,
  `courier_number` varchar(20) NOT NULL,
  `location_from` text NOT NULL,
  `location_to` text NOT NULL,
  `weight` decimal(10,2) NOT NULL,
  `price` double NOT NULL,
  `customer_id` int(11) NOT NULL,
  `payment_status` enum('paid','unpaid') NOT NULL,
  `delivery_status` enum('Delivered','In-transit','Parcel Recieved') NOT NULL DEFAULT 'Parcel Recieved',
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `couriers_tbl`
--

INSERT INTO `couriers_tbl` (`id`, `courier_number`, `location_from`, `location_to`, `weight`, `price`, `customer_id`, `payment_status`, `delivery_status`, `created_at`) VALUES
(1, '12501', 'RKL', 'BBSR', 5.00, 75, 1, 'paid', 'Parcel Recieved', '2024-04-23 12:14:11');

-- --------------------------------------------------------

--
-- Table structure for table `customer_tbl`
--

CREATE TABLE `customer_tbl` (
  `id` int(11) NOT NULL,
  `name` varchar(120) NOT NULL,
  `address` text NOT NULL,
  `city` text NOT NULL,
  `state` text NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(120) NOT NULL,
  `gender` enum('Male','Female','Other') DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customer_tbl`
--

INSERT INTO `customer_tbl` (`id`, `name`, `address`, `city`, `state`, `phone`, `email`, `gender`, `created_at`) VALUES
(1, 'Sagar Sutar', 'Ramnagar', 'Rourkela', 'Odisha', '7690041234', 'sagar@gmail.com', 'Male', '2024-04-23 12:12:32');

-- --------------------------------------------------------

--
-- Table structure for table `users_tbl`
--

CREATE TABLE `users_tbl` (
  `id` int(11) NOT NULL,
  `name` varchar(120) NOT NULL,
  `email` varchar(120) NOT NULL,
  `password` text NOT NULL,
  `gender` enum('Male','Female','Other') DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users_tbl`
--

INSERT INTO `users_tbl` (`id`, `name`, `email`, `password`, `gender`, `dob`, `phone`, `created_at`) VALUES
(1, 'Sagar', 'sagar@gmail.com', 'test12345', 'Male', '2024-04-21', '8339042376', '2024-04-21 17:22:53');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `couriers_tbl`
--
ALTER TABLE `couriers_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customer_tbl`
--
ALTER TABLE `customer_tbl`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users_tbl`
--
ALTER TABLE `users_tbl`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `couriers_tbl`
--
ALTER TABLE `couriers_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `customer_tbl`
--
ALTER TABLE `customer_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users_tbl`
--
ALTER TABLE `users_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
