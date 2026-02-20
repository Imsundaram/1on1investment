"use server";

import fs from "fs/promises";
import path from "path";
import { properties, team, services, testimonials } from "@/lib/data"; // Fallback to original mock data logic for now

// Since we are mocking the filesystem for now, we will return the mock data directly.
// In a real implementation with JSON persistence, we would read the JSON file.

export async function getProperties() {
    try {
        const textDbPath = path.join(process.cwd(), "src/lib/db.json");
        const data = await fs.readFile(textDbPath, "utf-8");
        const db = JSON.parse(data);
        return db.properties || [];
    } catch (e) {
        return properties;
    }
}

export async function getTeam() {
    try {
        const textDbPath = path.join(process.cwd(), "src/lib/db.json");
        const data = await fs.readFile(textDbPath, "utf-8");
        const db = JSON.parse(data);
        return db.team || [];
    } catch (e) {
        return team;
    }
}

// Keep using static data for services and testimonials for now as they are less likely to change frequently
// But we can export them so components can use this file as a single source of truth for fetches
export async function getServices() {
    return services;
}

export async function getTestimonials() {
    return testimonials;
}
