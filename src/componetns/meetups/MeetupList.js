import css from './MeetupList.module.css';
import MeetupItem from './MeetupItem';

function MeetupList(props){
    console.log(props.meetups);
    return (
    <ul className={css.list}>
        {props.meetups.map(meetup => <MeetupItem 
        key={meetup.id} 
        id ={meetup.id} 
        image={meetup.image} 
        title={meetup.title}
        address ={meetup.address}
        description ={meetup.description}  />)}
    </ul>
    );
}

export default MeetupList;