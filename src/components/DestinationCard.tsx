import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface DestinationCardProps {
  title: string;
  date: string;
  description?: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ title, date, description }) => {
  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{date}</p>
        {description && <p className="text-gray-500">{description}</p>}
        <Button variant="default" className="mt-3 w-full">View Details</Button>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;
