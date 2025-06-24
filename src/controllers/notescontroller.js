export function getAllNotes(req, res)  {
res.status(200).send("fetched");
}

export function createnote(req, res)  {
res.status(201).json({message:"note created succesfully"});
}

export function updatenote(req, res)  {
    res.status(200).json({message:"updated succesfully"});
}

export function deletenote(req, res) {
    res.status(200).json({message:"deleted"});
}