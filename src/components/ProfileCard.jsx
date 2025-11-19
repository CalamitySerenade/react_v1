import { useState } from 'react';

function ProfileCard(){
    const [showContact, setShowContact] = useState(false);
    const [isFollowing, setIsFollowing] = useState(false);
    const [viewCount, setViewCount] = useState(0);
    const [profilePic, setProfilePic] = useState('pic1');

    return(
        <div style={{ border: '2px solid #ccc', padding: '20px', maxWidth: '300px' }}>
            <h2>Alex Johnson</h2>
        </div>
    );
}
export default ProfileCard;