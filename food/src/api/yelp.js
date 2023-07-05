import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: "Bearer jV8btOWOiV1nRa5l4oCJDUiDMe1oY7Ru7-pouzmfA89uQnWURG3dsweL4tAHP0Wba5RbNt00GQJqlJLu2nAHeo-FoIgK-Otyl7FWj4pSNSDBSs86vK_yR5tl96mGZHYx"
    }
})