import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AddDestinationForm = ({ onAdd }: { onAdd: (destination: string) => void }) => {
  const [destination, setDestination] = useState("");

  return (
    <div className="flex gap-2">
      <Input
        type="text"
        placeholder="Enter a destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <Button onClick={() => { onAdd(destination); setDestination(""); }}>Add</Button>
    </div>
  );
};

export default AddDestinationForm;
