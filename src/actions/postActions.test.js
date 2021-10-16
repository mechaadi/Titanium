const postActions = require("./postActions")
// @ponicode
describe("postActions.fetchPosts", () => {
    test("0", () => {
        let callFunction = () => {
            postActions.fetchPosts()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("postActions.createPost", () => {
    test("0", () => {
        let callFunction = () => {
            postActions.createPost("https://accounts.google.com/o/oauth2/revoke?token=%s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            postActions.createPost("http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            postActions.createPost("http://www.croplands.org/account/confirm?t=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            postActions.createPost("https://")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            postActions.createPost("https://croplands.org/app/a/confirm?t=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            postActions.createPost(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
