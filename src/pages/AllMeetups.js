import DUMMY_DATA from "../dummy-data";
import MeetupList from "../componetns/meetups/MeetupList";

function AllMeetupPage() {
  console.log("AllMeetupPage");
  return (
    <section>
      <div>All Meetups Page</div>
      <ul>
        <MeetupList meetups={DUMMY_DATA}/>

      </ul>
    </section>
  );
}

export default AllMeetupPage;
