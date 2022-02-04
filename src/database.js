const Users = [
    {
        uid: 1,
        firstName: "Mahershala",
        lastName: "Ali",
        avatar: "https://atlantablackstar.com/wp-content/uploads/2016/06/Ali-1.jpg",
        admin: true,
        gymLog: {
            signedIn: false,
            logCount: 1,
        },
        trainer: true,
        trainerDetails: {
            category: "Body Building",
            bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis consectetur, fugit iure nam magnam placeat!",
            rating: 3
        }
    },
    {
        uid: 2,
        firstName: "Noel",
        lastName: "Clerke",
        avatar: "https://th.bing.com/th/id/OIP.Qh7b_mbc5GYbEb8MDE0cMAHaFj?pid=ImgDet&rs=1",
        admin: false,
        gymLog: {
            signedIn: false,
            logCount: 1,
        },
        trainer: true,
        trainerDetails: {
            category: "aerobics and cardio",
            bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nulla laboriosam porro corporis, voluptates amet quo dolor praesentium aspernatur soluta?",
            rating: 4
        }
    },
    {
        uid: 3,
        firstName: "Will",
        lastName: "Smith",
        avatar: "https://th.bing.com/th/id/OIP.fWD5Dn3rvhk_LeoFu76eLQHaFa?w=195&h=180&c=7&r=0&o=5&pid=1.7",
        admin: false,
        gymLog: {
            signedIn: false,
            logCount: 1,
        },
        trainer: false
    },
    {
        uid: 4,
        firstName: "Cillian",
        lastName: "Murphy",
        avatar: "https://www.denofgeek.com/wp-content/uploads/2014/08/hottest-main.jpg?fit=1024%2C608",
        admin: false,
        gymLog: {
            signedIn: false,
            logCount: 1,
        },
        trainer: false
    },
    {
        uid: 5,
        firstName: "Chris",
        lastName: "Hamsworth",
        avatar: "https://img.starbiz.com/resize/750x-/2020/01/16/chris-hemsworth-f426.jpg",
        admin: false,
        gymLog: {
            signedIn: false,
            logCount: 1,
        },
        trainer: false
    },
    {
        uid: 6,
        firstName: "Robert",
        lastName: "Downey",
        avatar: "https://imgix.ranker.com/list_img_v2/16799/2096799/original/the-best-marvel-movie-actors-ever-u1?w=817&h=427&fm=jpg&q=50&fit=crop",
        admin: false,
        gymLog: {
            signedIn: false,
            logCount: 1,
        },
        trainer: false
    }
]

// News Feed Section 
const Posts = [
    {
        userID: 1,
        postId: 0,
        postTime: 1,
        postHeader: "Im a front-End Mobile App developer.",
        postContent: " I am referred to as client-side developer, since everything I code is directly viewable by the client–in other words, the visitor to my app.",
        postImage: "https://th.bing.com/th?id=OIF.JzEZyGm8g2N%2fwhF8wnP3Og&pid=ImgDet&rs=1",
        likes: 0
    },
    {
        userID: 1,
        postId: 1,
        postTime: 5,
        postHeader: "Im working on my backend skill",
        postContent: "As a back-end developer might write the code that makes that button work by figuring out what data to fetch from the database for the appropriate customer and delivering it back to the front-end, where it is eventually displayed.",
        postImage: "https://th.bing.com/th/id/OIP.gFscIUNmZAEMDXSb2w2CFgHaEZ?pid=ImgDet&rs=1",
        likes: 20
    },
    {
        userID: 1,
        postId: 2,
        postTime: 12,
        postHeader: "A beast in the making",
        postContent: "Bodybuilding has imporved my self confidence immensly // Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quod corporis atque pariatur eum blanditiis saepe sequi quos reiciendis quam, eius nobis, quo nemo sint beatae distinctio illo eos assumenda.",
        postImage: "",
        likes: 40
    }
]

const FitnessTrainers = [
    {
        uid: 1,
        firstName: "Chris",
        lastName: "Hamsworth",
        avatar: "https://img.starbiz.com/resize/750x-/2020/01/16/chris-hemsworth-f426.jpg",
        category: "Body Building",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis consectetur, fugit iure nam magnam placeat!",
        rating: 3,
        selected: false,
        whatsapp: "071 454 6969",
        email: "chris@gmail.com",
        instagram: "chris_101",
    },
    {
        uid: 2,
        firstName: "Mahershala",
        lastName: "Ali",
        avatar: "https://atlantablackstar.com/wp-content/uploads/2016/06/Ali-1.jpg",
        category: "aerobics and cardio",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nulla laboriosam porro corporis, voluptates amet quo dolor praesentium aspernatur soluta?",
        rating: 4,
        selected: false,
        whatsapp: "011 235 4585",
        email: "",
        instagram: ""
    },
    {
        uid: 3,
        firstName: "Robert",
        lastName: "Downey",
        avatar: "https://imgix.ranker.com/list_img_v2/16799/2096799/original/the-best-marvel-movie-actors-ever-u1?w=817&h=427&fm=jpg&q=50&fit=crop",
        category: "Body Building",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis consectetur, fugit iure nam magnam placeat!",
        rating: 3,
        selected: false,
        whatsapp: "078 565 9898",
        email: "",
        instagram: ""
    },
    {
        uid: 4,
        firstName: "Cillian",
        lastName: "Murphy",
        avatar: "https://www.denofgeek.com/wp-content/uploads/2014/08/hottest-main.jpg?fit=1024%2C608",
        category: "aerobics and cardio",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nulla laboriosam porro corporis, voluptates amet quo dolor praesentium aspernatur soluta?",
        rating: 4,
        selected: false,
        whatsapp: "084 326 7858",
        email: "cillian@gmail.com",
        instagram: "cillian_the_gym"
    },
]

const GymLog = [
    Users.map(user => {
        user.gymLog.signedIn && GymLog.concat(...user)
    })
]

export { Users, GymLog, Posts, FitnessTrainers }