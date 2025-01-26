document.addEventListener('DOMContentLoaded', function() {
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API URL
        const dataContainer = document.getElementById('api-data'); // Container to display data
        
        try {
            // Fetch data asynchronously from the API
            const response = await fetch(apiUrl);
            const users = await response.json();

            // Clear the "Loading user data..." message
            dataContainer.innerHTML = '';

            // Create a <ul> element to display the user list
            const userList = document.createElement('ul');

            // Loop through the users array and create <li> elements for each user
            users.forEach(user => {
                const userItem = document.createElement('li');
                userItem.textContent = user.name; // Set user name as the text of <li>
                userList.appendChild(userItem); // Append <li> to <ul>
            });

            // Append the user list to the data container
            dataContainer.appendChild(userList);

        } catch (error) {
            // In case of an error, show a failure message
            dataContainer.innerHTML = 'Failed to load user data.';
        }
    }

    // Invoke the function after the DOM has fully loaded
    fetchUserData();
});
