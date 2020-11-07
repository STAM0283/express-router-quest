const express = require("express"); 
const router = express.Router(); 
const tags   = require("../data/tags");
const artciles= require("../data/posts"); 

router.get("/", (req, res) => {
    res.json(tags); 
});

router.get("/:tagId", (req, res) => { 
    const tagId = parseInt(req.params.tagId);
    const foundTags = tags.filter((tag) =>tag.id === tagId);
    if(!foundTags){
        return res.status(404).json({
            error: "Tag not found", 
        });
    }
    return res.json(foundTags)
});

router.get("/posts/:tag_ids", (req, res) => { 
    const tag_ids = parseInt(req.params.tag_ids);
    const articleSelected = artciles.filter((item) =>item.tag_ids === tag_ids );
    if(!articleSelected){
        return res.status(404).json({
            error: "Tag not found", 
        });
    }
    return res.json(articleSelected)
});

// router.get("/:tagId/posts", (req, res) => { 
//     const posts = req.body;
//     const articleSelected = artciles.filter((item) =>item.includes(posts));
//     if(!articleSelected){
//         return res.status(404).json({
//             error: "Tag not found", 
//         });
//     }
//     return res.json(articleSelected)
// });

module.exports = router;  