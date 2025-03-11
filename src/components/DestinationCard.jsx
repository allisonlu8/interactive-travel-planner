import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card } from "@/components/ui/card";
import { GripVertical } from "lucide-react";

export default function DestinationCard({ id, name }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Card ref={setNodeRef} style={style} className="flex items-center p-3 gap-2 cursor-grab" {...attributes}>
      <button {...listeners} className="text-gray-500">
        <GripVertical size={18} />
      </button>
      <span className="flex-1 text-lg font-medium">{name}</span>
    </Card>
  );
}
