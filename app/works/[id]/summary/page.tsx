import { permanentRedirect } from "next/navigation";

type Props = { params: Promise<{ id: string }> };

// Изложение теперь входит в страницу работы; старые ссылки ведут к нему.
export function generateStaticParams() { return []; }

export default async function SummaryPage({ params }: Props) {
  const { id } = await params;
  permanentRedirect(`/works/${id}#retelling`);
}
