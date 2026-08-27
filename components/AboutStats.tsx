"use client";
import React from "react";
import { useTranslations } from "next-intl";
import styles from "./AboutStats.module.scss";

const AboutStats = () => {
	const t = useTranslations();

	const stats = [
		{
			value: t("about.stats.projects_value"),
			label: t("about.stats.projects_label"),
		},
		{
			value: t("about.stats.uptime_value"),
			label: t("about.stats.uptime_label"),
		},
		{
			value: t("about.stats.users_value"),
			label: t("about.stats.users_label"),
		},
	];

	return (
		<dl className={styles["stats"]}>
			{stats.map((stat) => (
				<div key={stat.label} className={styles["item"]}>
					<dt className={styles["value"]}>{stat.value}</dt>
					<dd className={styles["label"]}>{stat.label}</dd>
				</div>
			))}
		</dl>
	);
};

export default AboutStats;
