import { getFormData } from "@/actions/form-action";
import { IconChevronLeft } from "@tabler/icons-react";
import { redirect } from "next/navigation";

export default async function FormDataPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const formDataRes = await getFormData(id);

  if (!formDataRes) redirect("/");

  return (
    <main className="max-w-screen-md mx-auto space-y-12 my-12">
      <a href="/" className="underline flex  items-center">
        <IconChevronLeft className="size-4 mr-2" />
        Back to form
      </a>
      <pre className="bg-secondary-50 p-4 rounded-lg shadow-sm whitespace-pre-wrap">
        {JSON.stringify(formDataRes.data, null, 2)}
      </pre>
    </main>
  );
}
