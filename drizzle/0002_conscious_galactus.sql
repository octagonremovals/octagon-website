CREATE TABLE `layout_annotations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`layoutId` varchar(32) NOT NULL,
	`reviewerName` varchar(128) NOT NULL,
	`comment` text NOT NULL,
	`xPercent` int NOT NULL,
	`yPercent` int NOT NULL,
	`sentiment` enum('positive','negative','neutral') NOT NULL DEFAULT 'neutral',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `layout_annotations_id` PRIMARY KEY(`id`)
);
