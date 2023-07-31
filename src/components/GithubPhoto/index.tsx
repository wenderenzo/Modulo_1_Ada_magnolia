"use client"
import React, { useEffect, useState } from 'react';

type GitHubProfilePictureProps = {
  githubUsername: string;
};

const GitHubProfilePicture = ({ githubUsername }:GitHubProfilePictureProps) => {
  const [profilePictureUrl, setProfilePictureUrl] = useState('');

  useEffect(() => {
    const fetchProfilePicture = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${githubUsername}`);
        const data = await response.json();
        setProfilePictureUrl(data.avatar_url);
      } catch (error) {
        console.error('Error fetching profile picture:', error);
      }
    };

    fetchProfilePicture();
  }, [githubUsername]);

  return (
    <div>
      {profilePictureUrl && (
        <img src={profilePictureUrl} alt={`${githubUsername}'s profile`} width={100} height={100} className='w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500'/>
      )}
    </div>
  );
};

export default GitHubProfilePicture;
