import MessageList from '../features/canal/MessageList.jsx';
import MessageComposer from '../features/canal/MessageComposer.jsx'

export default function canalConfidencial(){
    return(
        <div>
            <h2>Canal Confidencial</h2>
            <MessageList />
            <MessageComposer />
        </div>
    )
}