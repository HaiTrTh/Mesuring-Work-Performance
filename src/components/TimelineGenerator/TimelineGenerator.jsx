import React, {useState} from "react";
import { Container } from "react-bootstrap";

const TimelineGenerator = ({ tasks}) =>{
  const generateTimelineWithFixedBlocks = () => {
    const sortedTasks = [...tasks].sort(
      (a,b)=> b.importance * b.emergency - a.importance * a.emergency
    );
    const timeline = [];
    let currentTime = new Date("2024-11-24T07:00:00"); // Start at 7:00 AM
    const workEndTime = new Date("2024-11-24T16:30:00"); // Work ends at 4:30 PM
    const eveningStart = new Date("2024-11-24T19:30:00"); // Evening work starts at 7:30 PM
    const eveningEnd = new Date("2024-11-24T20:30:00"); // Evening work ends at 8:30 PM
    
    const fixedBlocks = [
      { taskName: "Exercise", startTime: "17:30", endTime: "18:30" },
      { taskName: "Dinner", startTime: "18:30", endTime: "19:30" },
      { taskName: "Read Book", startTime: "20:30", endTime: "21:30" },
      { taskName: "Write & Mindfulness", startTime: "21:30", endTime: "22:00" },
      { taskName: "Sleep", startTime: "22:00", endTime: "05:40" }, // Overnight sleep
    ];
    
    const addToTimeline = (taskName, startTime, endTime) => {
      timeline.push({taskName, startTime, endTime});
    };
    
    const scheduleTasks = (start, end) => {
      while(sortedTasks.length > 0){
        const task = sortedTasks.shift(); // Take the next highest priority task
        const taskDuration = 25; // Task duration (Pomodoro)

        if (start >= end) return;// Stop if the time window is exhausted

        // Schedule the task
        const taskEnd = new Date(start.getTime() + taskDuration * 60000);
        if (taskEnd > end) return; // Stop if task exceeds the end time
        
        addToTimeline(
          task.name,
          start.toLocaleTimeString([],{ hour: "2-digit", minute: "2-digit" }),
          taskEnd.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        );

        //Update start time (with break)
        start = new Date(taskEnd.getTime() + 5 * 60000); // Add 5-minute break
      }
    };
     // Morning and afternoon tasks
     scheduleTasks(currentTime, workEndTime);

     // Add fixed blocks
     fixedBlocks.forEach((block) => {
       addToTimeline(block.taskName, block.startTime, block.endTime);
     });
     // Evening tasks
      scheduleTasks(eveningStart, eveningEnd);

      return timeline;
  };
    const handleGenerateTimeline = () => {
      const timeline = generateTimelineWithFixedBlocks();
      // onGenerate(timeline); // Pass timeline back to parent
      setGeneratedTimeline(timeline); // Update the local state
    };

    const [generatedTimeline, setGeneratedTimeline] = useState([]);
    return (
      <Container>
        <button onClick={handleGenerateTimeline} className="btn btn-primary">
          Generate Timeline
        </button>
        <div className="mt-4">
          <ul>
            {generatedTimeline.map((item, index) => (
              <li key={index}>
                <strong>{item.taskName}</strong>: {item.startTime} - {item.endTime}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    );
}

export default TimelineGenerator
