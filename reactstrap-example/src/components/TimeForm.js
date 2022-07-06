import React from "react";
import { Input, Container, Card, Button } from "reactstrap";
export default function TimeForm() {
  const [formData, setFormData] = React.useState(0);
  const [timeLeft, setTimeLeft] = React.useState("");
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = now - formData;
    // let timeleft={
    //     hours:Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    //     minutes:Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    //     seconds:Math.floor((difference % (1000 * 60)) / 1000)
    // }
    console.log(timeleft);
    return timeLeft;
  }
  
  
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
          }, 1000);
          return () => clearTimeout(timer);
    });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  
  return (
    <div>
      <Container>
        <Card className="m-5 p-4 text-center">
          <h3 className="p-4">Time Form</h3>
          <form onSubmit={handleSubmit}>
            <Input onChange={(e)=>setFormData(e.target.value)} bsSize="sm" name="time"  type="number" placeholder="Enter your Time" />
            <Button
              className="mt-3 "
              type="submit"
              color="primary"
            >
              Start
            </Button>
          </form>
        </Card>
      </Container>
    </div>
  );
}
