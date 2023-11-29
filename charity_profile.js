document.addEventListener('DOMContentLoaded', function () {
    var volunteerNowBtn = document.getElementById('volunteerNowBtn');
    var contentContainer = document.getElementById('contentContainer'); // Add an ID to a container element

    volunteerNowBtn.addEventListener('click', function (event) {
        event.preventDefault();

        // Load the content of forms.html
        fetch('forms.html')
            .then(response => response.text())
            .then(data => {
                // Update the content container with the loaded HTML
                if (contentContainer) {
                    contentContainer.innerHTML = data;
                }
            })
            .catch(error => console.error('Error fetching forms.html:', error));
    });
});


function animateElement() {
    var element = document.getElementById('animatedElement');
    element.style.transition = 'width 1s, height 1s';
    element.style.width = '200px';
    element.style.height = '200px';
}

document.addEventListener("DOMContentLoaded", function () {
    var imageElement = document.querySelector("#saveTheChildrenLogo");
    imageElement.addEventListener("mouseover", function () {
        alert("Thank you for your donation!");
    });
    imageElement.addEventListener("mouseout", function () {
    });
});
