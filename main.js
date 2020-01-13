//API client initialization
const meraki = require('meraki')              //Import the meraki module
const configuration = meraki.Configuration    //Meraki default configuration
// My meraki API key from the dashboard Organization > Settings > API key
configuration.xCiscoMerakiAPIKey = "2bf7274b28683169bfb38bb9439310eef4fb64d6"
//Now lets try some code from the documentation
try {
  meraki.OrganizationsController.getOrganizations()
    .then(res => {
      let id = res[0].id
      //Now we can check the information of the network in our organization
      const params = {
        organizationId: id // Set the param id to the id we just got from get Organizations
      };
      meraki.NetworksController.getOrganizationNetworks(params)
        .then(res => {  
          let params = []
          let networkId = res[0].id // "Save" the id of the network we want to check
          params["networkId"] = networkId
          meraki.DevicesController.getNetworkDevices(networkId) 
            .then(res => {
              console.log("Devices:", res)
            })
        })  
    })
} catch (error) {
    //Show the errors
    console.log("Error was:", err)
}
