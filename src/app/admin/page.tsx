"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Plus, Trash2, Edit2, Save, X, Users, MessageSquare } from "lucide-react";
import {
    addProperty, deleteProperty, updateProperty, getProperties,
    addTeamMember, updateTeamMember, deleteTeamMember, getTeam,
    getSocials, updateSocials
} from "@/app/actions";
import { formatGoogleDriveUrl } from "@/lib/utils";
import { Property, TeamMember, Socials } from "@/types";

export default function Admin() {
    // Auth State
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");

    // Data State
    const [properties, setProperties] = useState<Property[]>([]);
    const [team, setTeam] = useState<TeamMember[]>([]);
    const [socials, setSocials] = useState<Socials>({});

    // UI State
    const [activeTab, setActiveTab] = useState<"properties" | "team" | "socials">("properties");
    const [isEditing, setIsEditing] = useState(false);
    const [isAdding, setIsAdding] = useState(false);
    const [currentEditItem, setCurrentEditItem] = useState<any>(null);

    // Initial Data Fetch
    useEffect(() => {
        if (isAuthenticated) {
            refreshData();
        }
    }, [isAuthenticated]);

    const refreshData = async () => {
        setProperties(await getProperties() as Property[]);
        setTeam(await getTeam() as TeamMember[]);
        setSocials(await getSocials() as Socials);
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === "admin123") {
            setIsAuthenticated(true);
        } else {
            alert("Invalid password (try: admin123)");
        }
    };

    // --- Property Handlers ---
    const handleAddProperty = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        await addProperty(formData);
        setIsAdding(false);
        refreshData();
    };

    const handleUpdateProperty = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        if (currentEditItem) {
            await updateProperty(currentEditItem.id, formData);
        }
        setIsEditing(false);
        setCurrentEditItem(null);
        refreshData();
    };

    const handleDeleteProperty = async (id: number) => {
        if (confirm("Are you sure?")) {
            await deleteProperty(id);
            refreshData();
        }
    };

    // --- Team Handlers ---
    const handleAddTeam = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        await addTeamMember(formData);
        setIsAdding(false);
        refreshData();
    };

    const handleUpdateTeam = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        if (currentEditItem) {
            await updateTeamMember(currentEditItem.id, formData);
        }
        setIsEditing(false);
        setCurrentEditItem(null);
        refreshData();
    };

    const handleDeleteTeam = async (id: number) => {
        if (confirm("Delete this team member?")) {
            await deleteTeamMember(id);
            refreshData();
        }
    };

    // --- Socials Handlers ---
    const handleUpdateSocials = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        await updateSocials(formData);
        alert("Social links updated!");
        refreshData();
    };


    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
                <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
                    <h1 className="text-2xl font-bold mb-6 text-center text-[var(--primary)]">Admin Login</h1>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button type="submit" className="w-full bg-[var(--primary)] text-white">Login</Button>
                        <p className="text-xs text-center text-gray-400">Hint: admin123</p>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-[var(--primary)]">Admin Dashboard</h1>
                    <div className="flex space-x-2">
                        <Button
                            variant={activeTab === "properties" ? "primary" : "outline"}
                            onClick={() => { setActiveTab("properties"); setIsAdding(false); setIsEditing(false); }}
                        >
                            Properties
                        </Button>
                        <Button
                            variant={activeTab === "team" ? "primary" : "outline"}
                            onClick={() => { setActiveTab("team"); setIsAdding(false); setIsEditing(false); }}
                        >
                            Team
                        </Button>
                        <Button
                            variant={activeTab === "socials" ? "primary" : "outline"}
                            onClick={() => { setActiveTab("socials"); setIsAdding(false); setIsEditing(false); }}
                        >
                            Socials
                        </Button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden min-h-[500px]">

                    {/* --- PROPERTIES TAB --- */}
                    {activeTab === "properties" && (
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-semibold">Manage Properties</h2>
                                {!isAdding && !isEditing && (
                                    <Button onClick={() => setIsAdding(true)} className="bg-green-600 text-white hover:bg-green-700">
                                        <Plus size={20} className="mr-2" /> Add Property
                                    </Button>
                                )}
                            </div>

                            {(isAdding || isEditing) ? (
                                <form onSubmit={isAdding ? handleAddProperty : handleUpdateProperty} className="space-y-4 max-w-2xl">
                                    <div className="grid grid-cols-2 gap-4">
                                        <input name="title" placeholder="Title" defaultValue={currentEditItem?.title} required className="p-2 border rounded" />
                                        <input name="price" placeholder="Price (e.g. ₹1.5 Cr)" defaultValue={currentEditItem?.price} required className="p-2 border rounded" />
                                        <input name="location" placeholder="Location" defaultValue={currentEditItem?.location} required className="p-2 border rounded" />

                                        <select name="type" defaultValue={currentEditItem?.type || "Residential"} className="p-2 border rounded">
                                            <option value="Residential">Residential</option>
                                            <option value="Commercial">Commercial</option>
                                            <option value="Rental">Rental</option>
                                        </select>

                                        <select name="category" defaultValue={currentEditItem?.category || "Buy"} className="p-2 border rounded">
                                            <option value="Buy">Buy</option>
                                            <option value="Rent">Rent</option>
                                            <option value="Sell">Sell</option>
                                        </select>

                                        <input name="beds" type="number" placeholder="Beds" defaultValue={currentEditItem?.beds} className="p-2 border rounded" />
                                        <input name="baths" type="number" placeholder="Baths" defaultValue={currentEditItem?.baths} className="p-2 border rounded" />
                                        <input name="area" placeholder="Area (e.g. 1500 sqft)" defaultValue={currentEditItem?.area} required className="p-2 border rounded" />
                                        <input name="image" placeholder="Image URL (Unsplash/Public URL)" defaultValue={currentEditItem?.image} className="p-2 border rounded col-span-2" />
                                        <textarea name="description" placeholder="Description" defaultValue={currentEditItem?.description} className="p-2 border rounded col-span-2 h-24" />

                                        <div className="flex items-center space-x-2">
                                            <input type="checkbox" name="featured" defaultChecked={currentEditItem?.featured} id="featured" />
                                            <label htmlFor="featured">Featured?</label>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2">
                                        <Button type="submit">Save Property</Button>
                                        <Button type="button" variant="outline" onClick={() => { setIsAdding(false); setIsEditing(false); setCurrentEditItem(null); }}>Cancel</Button>
                                    </div>
                                </form>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead className="bg-slate-50 text-[var(--primary)]">
                                            <tr>
                                                <th className="p-4">ID</th>
                                                <th className="p-4">Title</th>
                                                <th className="p-4">Price</th>
                                                <th className="p-4">Category</th>
                                                <th className="p-4">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {properties.map((p) => (
                                                <tr key={p.id} className="hover:bg-slate-50">
                                                    <td className="p-4">#{p.id}</td>
                                                    <td className="p-4 font-medium">{p.title}</td>
                                                    <td className="p-4">{p.price}</td>
                                                    <td className="p-4">{p.category}</td>
                                                    <td className="p-4 flex space-x-2">
                                                        <button onClick={() => { setIsEditing(true); setCurrentEditItem(p); }} className="text-blue-600 hover:bg-blue-50 p-2 rounded"><Edit2 size={18} /></button>
                                                        <button onClick={() => handleDeleteProperty(p.id)} className="text-red-600 hover:bg-red-50 p-2 rounded"><Trash2 size={18} /></button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    )}

                    {/* --- TEAM TAB --- */}
                    {activeTab === "team" && (
                        <div className="p-6">
                            {/* Team Page Settings */}
                            <div className="mb-8 p-6 bg-slate-50 rounded-lg border">
                                <h3 className="text-lg font-semibold mb-4 text-[var(--primary)]">Team Page Content</h3>
                                <form onSubmit={handleUpdateSocials} className="space-y-4">
                                    <div className="grid grid-cols-1 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Team Group Photo URL</label>
                                            <input name="teamGroupPhoto" defaultValue={socials.teamGroupPhoto} className="w-full p-2 border rounded" placeholder="https://drive.google.com/..." />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">About Team Description</label>
                                            <textarea name="teamDescription" defaultValue={socials.teamDescription} className="w-full p-2 border rounded h-24" placeholder="The dedicated professionals behind 1 ON 1 INVESTMENT..." />
                                        </div>
                                    </div>
                                    <Button type="submit" size="sm">Save Content</Button>
                                </form>
                            </div>

                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-semibold">Manage Team Members</h2>
                                {!isAdding && !isEditing && (
                                    <Button onClick={() => setIsAdding(true)} className="bg-green-600 text-white hover:bg-green-700">
                                        <Plus size={20} className="mr-2" /> Add Member
                                    </Button>
                                )}
                            </div>

                            {(isAdding || isEditing) ? (
                                <form onSubmit={isAdding ? handleAddTeam : handleUpdateTeam} className="space-y-4 max-w-2xl">
                                    <div className="grid grid-cols-2 gap-4">
                                        <input name="name" placeholder="Name" defaultValue={currentEditItem?.name} required className="p-2 border rounded" />
                                        <input name="role" placeholder="Role (e.g. Founder)" defaultValue={currentEditItem?.role} required className="p-2 border rounded" />
                                        <input name="phone" placeholder="Phone" defaultValue={currentEditItem?.phone} required className="p-2 border rounded" />
                                        <input name="email" placeholder="Email" defaultValue={currentEditItem?.email} required className="p-2 border rounded" />
                                        <input name="image" placeholder="Image URL" defaultValue={currentEditItem?.image} className="p-2 border rounded col-span-2" />
                                        <textarea name="bio" placeholder="Bio" defaultValue={currentEditItem?.bio} className="p-2 border rounded col-span-2 h-24" />
                                    </div>
                                    <div className="flex space-x-2">
                                        <Button type="submit">Save Member</Button>
                                        <Button type="button" variant="outline" onClick={() => { setIsAdding(false); setIsEditing(false); setCurrentEditItem(null); }}>Cancel</Button>
                                    </div>
                                </form>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {team.map((m) => (
                                        <div key={m.id} className="border p-4 rounded-lg flex items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                                                    <img src={formatGoogleDriveUrl(m.image)} alt={m.name} className="w-full h-full object-cover" />
                                                </div>
                                                <div>
                                                    <p className="font-bold">{m.name}</p>
                                                    <p className="text-xs text-gray-500">{m.role}</p>
                                                </div>
                                            </div>
                                            <div className="flex space-x-1">
                                                <button onClick={() => { setIsEditing(true); setCurrentEditItem(m); }} className="text-blue-600 p-1"><Edit2 size={16} /></button>
                                                <button onClick={() => handleDeleteTeam(m.id)} className="text-red-600 p-1"><Trash2 size={16} /></button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* --- SOCIALS TAB --- */}
                    {activeTab === "socials" && (
                        <div className="p-6">
                            <h2 className="text-xl font-semibold mb-6">Manage Social Links & Contact</h2>
                            <form onSubmit={handleUpdateSocials} className="space-y-4 max-w-xl">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Facebook URL</label>
                                    <input name="facebook" defaultValue={socials.facebook} className="w-full p-2 border rounded" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Twitter URL</label>
                                    <input name="twitter" defaultValue={socials.twitter} className="w-full p-2 border rounded" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Instagram URL</label>
                                    <input name="instagram" defaultValue={socials.instagram} className="w-full p-2 border rounded" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">LinkedIn URL</label>
                                    <input name="linkedin" defaultValue={socials.linkedin} className="w-full p-2 border rounded" />
                                </div>
                                <div className="border-t pt-4 mt-4">
                                    <h3 className="font-semibold mb-2">Contact Info</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="font-semibold mb-2 mt-4 text-[var(--secondary)]">Home Page Images</h3>
                                            <div className="grid grid-cols-1 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium mb-1">Hero Background Image URL</label>
                                                    <input name="heroImage" defaultValue={socials.heroImage} className="w-full p-2 border rounded" placeholder="https://images.unsplash.com/..." />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium mb-1">"Why Choose Us" Image URL</label>
                                                    <input name="whyUsImage" defaultValue={socials.whyUsImage} className="w-full p-2 border rounded" placeholder="https://images.unsplash.com/..." />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-t pt-4 mt-4">
                                            <h3 className="font-semibold mb-2 text-[var(--secondary)]">Contact Info</h3>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Google Maps Embed URL</label>
                                            <input name="googleMapUrl" defaultValue={socials.googleMapUrl} className="w-full p-2 border rounded" placeholder="https://www.google.com/maps/embed?pb=..." />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Office Image URL</label>
                                            <input name="officeImage" defaultValue={socials.officeImage} className="w-full p-2 border rounded" placeholder="https://drive.google.com/..." />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Office Hours</label>
                                            <input name="officeHours" defaultValue={socials.officeHours} className="w-full p-2 border rounded" placeholder="Mon - Sat: 10:00 AM - 7:00 PM" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Team Group Photo URL</label>
                                            <input name="teamGroupPhoto" defaultValue={socials.teamGroupPhoto} className="w-full p-2 border rounded" placeholder="https://drive.google.com/..." />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Email</label>
                                            <input name="email" defaultValue={socials.email} className="w-full p-2 border rounded" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Phone</label>
                                            <input name="phone" defaultValue={socials.phone} className="w-full p-2 border rounded" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Address</label>
                                            <input name="address" defaultValue={socials.address} className="w-full p-2 border rounded" />
                                        </div>
                                    </div>
                                </div>
                                <Button type="submit" className="w-full">Save Changes</Button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
