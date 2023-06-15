//DOMContentLoaded will make sure that the checkboxes and page is loaded before the fn is executed
document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.custom-checkbox');
  
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('click', async (event) => {
        
        const taskId = event .target.id;

        try {
            //this will direct to the router with taskID
            await fetch(`/tasks/toggle/${taskId}`, {method: 'POST'});
        } catch (error) {
            console.error('Error toggling task:', error);
        }
      });
    });
});