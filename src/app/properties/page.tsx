import { getProperties } from "@/app/actions";
import { PropertiesList } from "@/components/PropertiesList";

export const dynamic = "force-dynamic";

export default async function PropertiesPage() {
    const properties = await getProperties();
    return <PropertiesList initialProperties={properties} />;
}
