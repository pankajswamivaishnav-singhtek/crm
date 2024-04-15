import React, { useState } from "react";

const Dummy = () => {
  // Initial participants options
  const initialParticipants = [
    { id: 1, email: "email1@example.com" },
    { id: 2, email: "email2@example.com" },
    { id: 3, email: "email3@example.com" },
    { id: 4, email: "email4@example.com" },
    { id: 5, email: "email5@example.com" },
  ];

  // State to track selected participants
  const [selectedParticipants, setSelectedParticipants] = useState([]);

  // Function to handle checkbox toggle
  const handleCheckboxToggle = (id) => {
    const index = selectedParticipants.indexOf(id);
    if (index === -1) {
      setSelectedParticipants([...selectedParticipants, id]);
    } else {
      setSelectedParticipants(
        selectedParticipants.filter((item) => item !== id)
      );
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedEmails = initialParticipants
      .filter((participant) => selectedParticipants.includes(participant.id))
      .map((participant) => participant.email);
    console.log("Selected emails:", selectedEmails);
    // Here you can perform further actions with selected emails
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            {initialParticipants.map((participant) => (
              <div key={participant.id}>
                <input
                  type="checkbox"
                  id={participant.id}
                  checked={selectedParticipants.includes(participant.id)}
                  onChange={() => handleCheckboxToggle(participant.id)}
                />
                <label htmlFor={participant.id}>{participant.email}</label>
              </div>
            ))}
          </div>
          <div>
            <h3>Selected Participants:</h3>
            {selectedParticipants.map((id) => (
              <div key={id}>
                {
                  initialParticipants.find(
                    (participant) => participant.id === id
                  ).email
                }
              </div>
            ))}
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Dummy;
