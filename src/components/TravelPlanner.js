import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { arrayMove } from "@dnd-kit/sortable";
import DestinationCard from "./DestinationCard";
import { Input, Button } from "@/components/ui";

export default function TravelPlanner() {
  const [destinations, setDestinations] = useState([]);
  const [newDestination, setNewDestination] = useState("");

  const handleAddDestination = () => {
    if (newDestination.trim()) {
      setDestinations([...destinations, { id: Date.now(), name: newDestination }]);
      setNewDestination("");
    }
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setDestinations((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Interactive Travel Planner</h1>
      <div className="flex gap-2 mb-4">
        <Input
          type="text"
          value={newDestination}
          onChange={(e) => setNewDestination(e.target.value)}
          placeholder="Enter a destination"
          aria-label="Destination Input"
        />
        <Button onClick={handleAddDestination}>Add</Button>
      </div>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={destinations} strategy={verticalListSortingStrategy}>
          <div className="space-y-2">
            {destinations.map((destination) => (
              <DestinationCard key={destination.id} id={destination.id} name={destination.name} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}
