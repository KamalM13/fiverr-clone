interface MessageObject {
    [userId: string]: string[];
}

interface NotificationsProps {
    messages: MessageObject;
}


export const  MessageCount = (notifications:NotificationsProps):number => {
    // Get the messages object from notifications
    const messagesObject = notifications.messages;

    // Get an array of all user IDs
    const userIds = Object.keys(messagesObject);

    // Calculate the total number of messages
    const totalMessages = userIds.reduce((acc, userId) => {
        // Get the array of messages for each user ID
        const messagesArray = messagesObject[userId];
        // Add the number of messages for this user ID to the accumulator
        return acc + messagesArray.length;
    }, 0);
    return totalMessages;
}

