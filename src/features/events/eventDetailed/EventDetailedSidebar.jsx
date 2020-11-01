import React from "react";
import { Segment, Item } from "semantic-ui-react";

export default function EventDetailedSidebar({ attendees }) {
  return (
    <>
      <Segment
        textAlign='center'
        style={{ border: "none" }}
        attached='top'
        secondary
        inverted
        color='teal'
      >
        {attendees.length} {attendees.length > 1 ? "People " : "Person "}
        Going
      </Segment>
      <Segment attached>
        <Item.Group relaxed divided>
          {attendees.map((att) => (
            <Item key={att.id} style={{ position: "relative" }}>
              <Item.Image
                size='tiny'
                src={att.photoURL || "/assets/user.png"}
              />
              <Item.Content verticalAlign='middle'>
                <Item.Header as='h3'>
                  <span>{att.displayName}</span>
                </Item.Header>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </Segment>
    </>
  );
}
