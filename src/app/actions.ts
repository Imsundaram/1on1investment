"use server";

import fs from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";

import dbConnect from "@/lib/mongodb";
import Property from "@/models/Property";
import TeamMember from "@/models/TeamMember";
import Socials from "@/models/Socials";

const textDbPath = path.join(process.cwd(), "src/lib/db.json");

// Helper to read JSON DB (Fallback & Seeding)
async function getJsonDb() {
    try {
        const data = await fs.readFile(textDbPath, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading JSON DB:", error);
        return { properties: [], team: [], socials: {} };
    }
}

// Helper to write JSON DB (Fallback)
async function saveJsonDb(data: any) {
    try {
        await fs.writeFile(textDbPath, JSON.stringify(data, null, 2), "utf-8");
    } catch (error) {
        console.error("Error saving JSON DB:", error);
        throw new Error("Failed to save data locally");
    }
}

const USE_MONGO = !!process.env.MONGODB_URI;

// --- Properties Actions ---

export async function getProperties() {
    if (USE_MONGO) {
        await dbConnect();
        const count = await Property.countDocuments();
        if (count === 0) {
            const jsonData = await getJsonDb();
            if (jsonData.properties && jsonData.properties.length > 0) {
                // Ensure unique IDs if possible or rely on standard mongo _id
                // We use 'id' field for our logic, so allow duplicates in mongo _id but specific id field unique
                try {
                    await Property.insertMany(jsonData.properties);
                } catch (e) {
                    console.error("Seeding error", e);
                }
            }
        }
        const properties = await Property.find({}).sort({ createdAt: -1 }).lean();
        return properties.map((p: any) => ({ ...p, _id: p._id.toString() }));
    }

    const db = await getJsonDb();
    return db.properties || [];
}

export async function getProperty(id: number) {
    if (USE_MONGO) {
        await dbConnect();
        const p = await Property.findOne({ id }).lean();
        return p ? { ...p, _id: (p as any)._id.toString() } : null;
    }

    const db = await getJsonDb();
    return db.properties.find((p: any) => p.id === id);
}

export async function addProperty(formData: FormData) {
    const data = {
        id: Date.now(),
        title: formData.get("title"),
        price: formData.get("price"),
        location: formData.get("location"),
        type: formData.get("type"),
        beds: parseInt(formData.get("beds") as string) || 0,
        baths: parseInt(formData.get("baths") as string) || 0,
        area: formData.get("area"),
        image: formData.get("image") || "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
        category: formData.get("category"),
        featured: formData.get("featured") === "on",
        description: formData.get("description"),
    };

    if (USE_MONGO) {
        await dbConnect();
        await Property.create(data);
    } else {
        const db = await getJsonDb();
        db.properties.push(data);
        await saveJsonDb(db);
    }

    revalidatePath("/");
    revalidatePath("/properties");
    revalidatePath("/admin");
    return { success: true };
}

export async function updateProperty(id: number, formData: FormData) {
    const data: any = {
        title: formData.get("title"),
        price: formData.get("price"),
        location: formData.get("location"),
        type: formData.get("type"),
        beds: parseInt(formData.get("beds") as string) || 0,
        baths: parseInt(formData.get("baths") as string) || 0,
        area: formData.get("area"),
        category: formData.get("category"),
        featured: formData.get("featured") === "on",
        description: formData.get("description"),
    };
    const image = formData.get("image") as string;
    if (image) data.image = image;

    if (USE_MONGO) {
        await dbConnect();
        await Property.findOneAndUpdate({ id }, data);
    } else {
        const db = await getJsonDb();
        const index = db.properties.findIndex((p: any) => p.id === id);
        if (index !== -1) {
            db.properties[index] = { ...db.properties[index], ...data };
            if (image) db.properties[index].image = image;
            await saveJsonDb(db);
        }
    }

    revalidatePath("/");
    revalidatePath("/properties");
    revalidatePath(`/properties/${id}`);
    revalidatePath("/admin");
    return { success: true };
}

export async function deleteProperty(id: number) {
    if (USE_MONGO) {
        await dbConnect();
        await Property.findOneAndDelete({ id });
    } else {
        const db = await getJsonDb();
        db.properties = db.properties.filter((p: any) => p.id !== id);
        await saveJsonDb(db);
    }

    revalidatePath("/");
    revalidatePath("/properties");
    revalidatePath("/admin");
    return { success: true };
}

// --- Team Actions ---

export async function getTeam() {
    if (USE_MONGO) {
        await dbConnect();
        const count = await TeamMember.countDocuments();
        if (count === 0) {
            const jsonData = await getJsonDb();
            if (jsonData.team && jsonData.team.length > 0) {
                try {
                    await TeamMember.insertMany(jsonData.team);
                } catch (e) {
                    console.error("Seeding team error", e);
                }
            }
        }
        const team = await TeamMember.find({}).sort({ createdAt: 1 }).lean();
        return team.map((t: any) => ({ ...t, _id: t._id.toString() }));
    }

    const db = await getJsonDb();
    return db.team || [];
}

export async function addTeamMember(formData: FormData) {
    const data = {
        id: Date.now(),
        name: formData.get("name"),
        role: formData.get("role"),
        bio: formData.get("bio"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        image: formData.get("image") || "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
    };

    if (USE_MONGO) {
        await dbConnect();
        await TeamMember.create(data);
    } else {
        const db = await getJsonDb();
        if (!db.team) db.team = [];
        db.team.push(data);
        await saveJsonDb(db);
    }

    revalidatePath("/team");
    revalidatePath("/about");
    revalidatePath("/");
    revalidatePath("/admin");
    return { success: true };
}

export async function updateTeamMember(id: number, formData: FormData) {
    const data: any = {
        name: formData.get("name"),
        role: formData.get("role"),
        bio: formData.get("bio"),
        phone: formData.get("phone"),
        email: formData.get("email"),
    };
    const image = formData.get("image") as string;
    if (image) data.image = image;

    if (USE_MONGO) {
        await dbConnect();
        await TeamMember.findOneAndUpdate({ id }, data);
    } else {
        const db = await getJsonDb();
        const index = db.team.findIndex((m: any) => m.id === id);
        if (index !== -1) {
            db.team[index] = { ...db.team[index], ...data };
            if (image) db.team[index].image = image;
            await saveJsonDb(db);
        }
    }

    revalidatePath("/team");
    revalidatePath("/");
    revalidatePath("/admin");
    return { success: true };
}

export async function deleteTeamMember(id: number) {
    if (USE_MONGO) {
        await dbConnect();
        await TeamMember.findOneAndDelete({ id });
    } else {
        const db = await getJsonDb();
        db.team = db.team.filter((m: any) => m.id !== id);
        await saveJsonDb(db);
    }

    revalidatePath("/team");
    revalidatePath("/");
    revalidatePath("/admin");
    return { success: true };
}

// --- Socials Actions ---

export async function getSocials() {
    if (USE_MONGO) {
        await dbConnect();
        let socials = await Socials.findOne({}).lean();

        if (!socials) {
            const jsonData = await getJsonDb();
            if (jsonData.socials) {
                // Remove _id if it exists in json to avoid collision
                const { _id, ...socialData } = jsonData.socials;
                try {
                    socials = await Socials.create(socialData);
                } catch (e) {
                    // race condition might cause creation error if parallel requests
                }
                // Fetch again to be sure
                if (!socials) socials = await Socials.findOne({}).lean();
            }
        }

        return socials ? { ...socials, _id: (socials as any)._id?.toString() } : {};
    }

    const db = await getJsonDb();
    return db.socials || {};
}

export async function updateSocials(formData: FormData) {
    const fields = [
        "facebook", "twitter", "instagram", "linkedin",
        "email", "phone", "address",
        "googleMapUrl", "officeImage", "officeHours",
        "teamGroupPhoto", "teamDescription",
        "heroImage", "whyUsImage", "aboutImage"
    ];

    const updates: any = {};
    fields.forEach(field => {
        const value = formData.get(field);
        if (value !== null) updates[field] = value as string;
    });

    if (USE_MONGO) {
        await dbConnect();
        // Upsert: update if exists, insert if not
        // We use findOneAndUpdate on empty query {} to always target the single document
        await Socials.findOneAndUpdate({}, updates, { upsert: true, new: true, setDefaultsOnInsert: true });
    } else {
        const db = await getJsonDb();
        db.socials = { ...(db.socials || {}), ...updates };
        await saveJsonDb(db);
    }

    revalidatePath("/");
    revalidatePath("/contact");
    revalidatePath("/team");
    revalidatePath("/admin");
    revalidatePath("/", "layout");
    return { success: true };
}
