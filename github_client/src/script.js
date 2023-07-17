const { Octokit } = require("@octokit/rest");

function getRepos() {
  document.getElementById('repos-list').innerHTML = '';
  document.getElementById('message').value = '';

  const octokit = new Octokit({
    auth: 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,
  });
  
  octokit.repos
    .listForAuthenticatedUser()
    .then(({ data }) => {
      console.log(data);
      data.forEach((element) => {
        let item = document.createElement('li');
        item.innerHTML = element.name;
        document.getElementById('repos-list').appendChild(item);
        console.log(element.name);

        let messageSuccess = "Values found!";
        message.style.color = 'green';
        document.getElementById('message').innerText = messageSuccess;
      });
    })
    .catch((error) => {
      console.log(error);
      let messageError = "No values found";
      message.style.color = 'red';
      document.getElementById('message').innerText = messageError;
    });
}








