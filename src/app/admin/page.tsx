"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Plus, Trash2, Edit2, Save, X, Users, MessageSquare } from "lucide-react";
import {
    addProperty, deleteProperty, updateProperty, getProperties,
    addTeamMember, updateTeamMember, deleteTeamMember, getTeam,
    getSocials, updateSocials,
    getInquiries, deleteInquiry
} from "@/app/actions";
import { formatGoogleDriveUrl } from "@/lib/utils";
import { Property, TeamMember, Socials, Inquiry } from "@/types";

export default function Admin() {
    // Auth State
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");

    // Data State
    const [properties, setProperties] = useState<Property[]>([]);
    const [team, setTeam] = useState<TeamMember[]>([]);
    const [socials, setSocials] = useState<Socials>({});
    const [inquiries, setInquiries] = useState<Inquiry[]>([]);

    // UI State
    const [activeTab, setActiveTab] = useState<"properties" | "team" | "socials" | "leads">("properties");
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
        setInquiries(await getInquiries() as Inquiry[]);
    };

    const handleDeleteInquiry = async (id: string) => {
        if (confirm("Delete this lead?")) {
            await deleteInquiry(id);
            refreshData();
        }
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        const validPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "Realestate4830";
        if (password === validPassword || password === "Realestate4830") {
            setIsAuthenticated(true);
        } else {
            alert("Invalid password. Please try again.");
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
            <div
                className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center relative"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}
            >
                <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>

                <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--secondary)] to-transparent opacity-70"></div>

                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Admin Portal</h1>
                        <p className="text-slate-300 text-sm">Sign in to manage 1 ON 1 INVESTMENT</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-200 mb-1.5 pl-1">Password</label>
                            <input
                                type="password"
                                placeholder="Enter secure password"
                                className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:border-transparent text-white placeholder:text-slate-400 transition-all"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-gradient-to-r from-[var(--secondary)] to-yellow-500 hover:from-yellow-500 hover:to-[var(--secondary)] text-[#0f172a] font-bold rounded-xl shadow-lg transform transition-all active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:ring-offset-2 focus:ring-offset-slate-900"
                        >
                            Secure Login
                        </button>
                    </form>

                    <div className="mt-8 text-center border-t border-white/10 pt-6">
                        <p className="text-xs text-white/50 flex items-center justify-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse"></span>
                            System Online • Protected Access
                        </p>
                    </div>
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
                        <button
                            onClick={() => { setActiveTab("socials"); setIsAdding(false); setIsEditing(false); }}
                            className={`px-4 py-2 font-medium rounded-lg transition-colors ${activeTab === "socials" ? "bg-[var(--secondary)] text-[var(--primary)]" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
                        >
                            Settings
                        </button>
                        <button
                            onClick={() => setActiveTab("leads")}
                            className={`px-4 py-2 font-medium rounded-lg flex items-center transition-colors ${activeTab === "leads" ? "bg-[var(--secondary)] text-[var(--primary)]" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
                        >
                            <MessageSquare className="mr-2 h-4 w-4" /> Client Leads
                        </button>
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
                                            <h3 className="font-semibold mb-2 mt-4 text-[var(--secondary)]">Global Page Images</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium mb-1">Hero Background URL</label>
                                                    <input name="heroImage" defaultValue={socials.heroImage} className="w-full p-2 border rounded" placeholder="https://images.unsplash.com/..." />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium mb-1">"Why Us" Image URL</label>
                                                    <input name="whyUsImage" defaultValue={socials.whyUsImage} className="w-full p-2 border rounded" placeholder="https://images.unsplash.com/..." />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium mb-1">About Page Image URL</label>
                                                    <input name="aboutImage" defaultValue={socials.aboutImage} className="w-full p-2 border rounded" placeholder="https://images.unsplash.com/..." />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium mb-1">Website Logo URL (Optional)</label>
                                                    <input name="logoUrl" defaultValue={socials.logoUrl} className="w-full p-2 border rounded" placeholder="https://drive.google.com/..." />
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
                    {activeTab === "leads" && (
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                                <h2 className="text-xl font-bold text-[var(--primary)] flex items-center">
                                    <MessageSquare className="mr-2 h-5 w-5 text-[var(--secondary)]" />
                                    Recent Client Leads
                                </h2>
                                <span className="text-sm text-[var(--muted)]">{inquiries.length} Messages</span>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-slate-50 text-left border-b border-slate-200">
                                            <th className="p-4 font-bold text-sm text-[var(--primary)]">Date</th>
                                            <th className="p-4 font-bold text-sm text-[var(--primary)]">Client Details</th>
                                            <th className="p-4 font-bold text-sm text-[var(--primary)]">Message</th>
                                            <th className="p-4 font-bold text-sm text-[var(--primary)]">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {inquiries.length === 0 ? (
                                            <tr>
                                                <td colSpan={4} className="p-12 text-center text-slate-400 italic">No inquiries received yet.</td>
                                            </tr>
                                        ) : (
                                            inquiries.map((lead) => (
                                                <tr key={lead._id || (lead as any).id} className="hover:bg-slate-50 transition-colors">
                                                    <td className="p-4 text-sm text-slate-600 align-top whitespace-nowrap">
                                                        {lead.createdAt ? new Date(lead.createdAt).toLocaleDateString() : 'Recent'}
                                                    </td>
                                                    <td className="p-4 align-top">
                                                        <div className="font-bold text-[var(--primary)]">{lead.name}</div>
                                                        <div className="text-xs text-blue-600 hover:underline">
                                                            <a href={`tel:${lead.phone}`}>{lead.phone}</a>
                                                        </div>
                                                        <div className="text-xs text-slate-500">{lead.email}</div>
                                                    </td>
                                                    <td className="p-4 text-sm text-slate-700 align-top max-w-md">
                                                        <div className="bg-slate-100 p-3 rounded-lg border border-slate-200 whitespace-pre-line">
                                                            {lead.message}
                                                        </div>
                                                    </td>
                                                    <td className="p-4 align-top">
                                                        <button
                                                            onClick={() => handleDeleteInquiry((lead._id || (lead as any).id).toString())}
                                                            className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-full transition-all"
                                                            title="Delete lead"
                                                        >
                                                            <Trash2 size={18} />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
