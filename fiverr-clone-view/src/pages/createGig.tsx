import { gigReducer, initialState, Plan } from "@/lib/gigReducer";
import { Gig } from "@/types/gig";
import newRequest from "@/utils/newRequest";
import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateGig = () => {
    const [state, dispatch] = useReducer(gigReducer, initialState);
    const navigate = useNavigate();
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        dispatch({ type: 'UPDATE_FIELD', field: name as keyof Gig, value });
    };
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log(state);
        try {
            newRequest.post('/gigs/create', state).then(res => {
                navigate(`/gig/${res.data}`)
            })
        } catch (err) {
            console.log(err)
        }
    }
    const handleFeature = (e: any) => {
        e.preventDefault();
        dispatch({ type: "ADD_FEATURE", value: e.target[0].value });
        e.target[0].value = "";
    }
    const handlePlan = (e: any) => {
        e.preventDefault();
        const newPlan: Plan = {
            name: e.target[0].value,
            shortDesc: e.target[1].value,
            price: parseInt(e.target[2].value),
        };
        dispatch({ type: "ADD_PLAN", value: newPlan });
        e.target[0].value = ""
        e.target[1].value = ""
        e.target[2].value = ""
    }

    const handleCoverImages = async (e: any) => {
        const files = e.target.files;
        const promises = [];

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const formData = new FormData();
            formData.append('image', file);

            const uploadPromise = newRequest.post('/gigs/uploadImage', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            promises.push(uploadPromise);
        }

        try {
            const responses = await Promise.all(promises);
            const imageUrls = responses.map(response => response.data);

            imageUrls.forEach(imageUrl => {
                dispatch({ type: 'ADD_IMAGE', value: imageUrl });
            });
        } catch (error) {
            console.error('Error uploading images:', error);
        }
    };


    return (
        <div>
            <div className="flex justify-center">
                <div className="w-[1000px] p-10">
                    <h1 className="w-max mb-8 text-main2 font-semibold text-xl">Create a Gig</h1>
                    <div className="flex justify-between">
                        <div className="space-y-5">
                            <div className="flex flex-col gap-y-2">
                                <label className="text-main2 font-bold">Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Logo Design for your business"
                                    className="w-[300px] h-[50px] border border-gray-300 rounded-[5px] px-3 py-2"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col gap-y-3">
                                <label className="text-main2 font-bold">Category</label>
                                <select name="category" onChange={handleChange} defaultValue={"Design"} className="w-[300px] h-[50px]">
                                    <option value="design">Design</option>
                                    <option value="web">Web Development</option>
                                    <option value="animation">Animation</option>
                                    <option value="music">Music</option>
                                    <option value="writing">Writing</option>
                                    <option value="video">Video Editing</option>
                                    <option value="marketing">Marketing</option>
                                    <option value="programming">Programming</option>
                                    <option value="business">Business</option>
                                    <option value="lifestyle">Lifestyle</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-y-5">
                                <label className="text-main2 font-bold">Cover Image</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    onChange={handleCoverImages}
                                />
                                <label className="text-main2 font-bold">Upload More Images</label>
                                <input
                                    type="file"
                                    multiple
                                    onChange={(e) => { }}
                                />
                                <button //onClick={handleUpload}
                                    className="bg-black text-white px-5 py-1 rounded-[5px]"
                                >
                                    Upload
                                </button>
                            </div>

                            <div className="flex flex-col gap-y-5">
                                <label className="text-main2 font-bold">Description</label>
                                <textarea
                                    name="about"
                                    id=""
                                    placeholder="Detailed description of your service"
                                    onChange={handleChange}
                                    className="w-[300px] h-[350px] border border-gray-300 rounded-[5px] px-3 py-2"
                                ></textarea>
                                <button onClick={handleSubmit} >Create</button>
                            </div>
                        </div>
                        <div className="space-y-5">
                            <div className="flex flex-col gap-y-2">
                                <label className="text-main2 font-bold">Short Title</label>
                                <input
                                    type="text"
                                    name="shortTitle"
                                    placeholder="e.g. One-page web design"
                                    onChange={handleChange}
                                    className="w-[300px] h-[50px] border border-gray-300 rounded-[5px] px-3 py-2"
                                />
                            </div >
                            <div className="flex flex-col gap-y-2">
                                <label className="text-main2 font-bold">Short Description</label>
                                <textarea
                                    name="shortDesc"
                                    onChange={handleChange}
                                    id=""
                                    placeholder="Short description of your service"
                                    className="w-[300px] h-[50px] border border-gray-300 rounded-[5px] px-3 py-2"
                                ></textarea>
                            </div>
                            <div className="flex flex-col gap-y-2">

                                <label className="text-main2 font-bold">Delivery Time (e.g. 1 day)</label>
                                <input type="number" name="delivery" min={0} onChange={handleChange}
                                    className="w-[300px] h-[50px] border border-gray-300 rounded-[5px] px-3 py-2" />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label className="text-main2 font-bold">Revision Number</label>
                                <input
                                    type="number"
                                    name="revisions"
                                    onChange={handleChange}
                                    min={0}
                                    className="w-[300px] h-[50px] border border-gray-300 rounded-[5px] px-3 py-2"
                                />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label className="text-main2 font-bold">Add Features</label>
                                <form className="flex justify-center" onSubmit={handleFeature}
                                >
                                    <input type="text" placeholder="Page design"
                                        className="w-[300px] h-[50px] border border-gray-300 rounded-[5px] px-3 py-2" />
                                </form>
                            </div>
                            <div className="">
                                {state?.features?.map((feature, index) => (
                                    <div className="flex justify-between" key={index}>
                                        {feature}
                                        <button
                                            onClick={() =>
                                                dispatch({ type: "REMOVE_FEATURE", index })
                                            }
                                        >X</button>
                                    </div>
                                ))}
                            </div>
                            <div className="w-[300px]">
                                <label className="text-main2 font-bold">Plans</label>
                                <form className="flex flex-col gap-y-2 p-1" onSubmit={handlePlan}>
                                    <input type="text" name="planName"
                                        className="w-[300px] h-[50px] border border-gray-300 rounded-[5px] px-3 py-2"
                                        placeholder="Plan Name"
                                    />
                                    <input type="text" name="shortDesc"
                                        placeholder="Short Description for this plan"
                                        className="w-[300px] h-[50px] border border-gray-300 rounded-[5px] px-3 py-2"
                                    />
                                    <input type="number" name="price"
                                        className="w-[300px] h-[50px] border border-gray-300 rounded-[5px] px-3 py-2"
                                        placeholder="Price"
                                    />
                                    {state?.plans?.length < 3 ?
                                        <button type="submit" className="bg-black text-white px-2">Add</button>
                                        : ""
                                    }
                                    <div className="flex flex-col p-1" >
                                        {state.plans.map((plan, index) => (
                                            <div className="flex justify-between items-center" key={index}>
                                                <div className="w-[10px]">{plan.name}</div>
                                                <div>{plan.price}</div>
                                                <button
                                                    onClick={() =>
                                                        dispatch({ type: "REMOVE_PLAN", index })
                                                    }
                                                >X</button>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex flex-col gap-y-2">
                                        <label htmlFor="" className="text-main2 font-bold">Price</label>
                                        <input type="number" onChange={handleChange} name="price"
                                            className="w-[300px] h-[50px] border border-gray-300 rounded-[5px] px-3 py-2"
                                        />
                                    </div>
                                </form>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CreateGig