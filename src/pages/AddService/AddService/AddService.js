import React from 'react';
import { toast } from 'react-toastify';

const AddService = () => {
    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const imgURL = form.imgURL.value;
        const price = form.price.value;
        const description = form.description.value;
        const service = {
            img: imgURL,
            price: price,
            title:title,
            description: description
        }
        console.log(service);
        fetch('http://localhost:5000/addService', {
            method:'PUT', 
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(service)
        })
            .then(res => {
                form.reset();
                toast.success('successfully added', {
                    position: toast.POSITION.TOP_CENTER
                })
                return res.json()
            })
            .then(data => console.log(data))
        .catch(error=>console.log(error))
    }
    return (
        <section className="p-6  bg-gray-800  text-gray-50">
        <form onSubmit={handleAddService} noValidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
        
            <fieldset className="grid grid-cols-4 gap-6 p-6  shadow-sm bg-gray-600">
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 text-white">
                    <div className="col-span-full sm:col-span-3">
                        <label htmlFor="username" className="text-sm">Service title</label>
                        <input name='title' type="text" placeholder="service title" className="   p-2 w-full rounded-md   border-gray-700  text-gray-900" />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label htmlFor="website" className="text-sm">Img URL</label>
                        <input id="website"  name='imgURL' type="text" placeholder="https://" className="p-2 w-full rounded-md   border-gray-700  text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                        <label htmlFor="username" className="text-sm">service Price</label>
                        <input id="username" type="text" name='price' placeholder="service price" className="p-2 w-full rounded-md   border-gray-700  text-gray-900" />
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="bio" className="text-sm">Description</label>
                        <textarea id="bio" name='description' placeholder="Your service description" className="p-2 w-full rounded-md   border-gray-700  text-gray-900"></textarea>
                    </div>
                    <div className="col-span-full">
                        
                        <div className="flex items-center space-x-2">
                         
                            <button type="submit" className="px-4 py-2 border rounded-md  border-gray-100">Add</button>
                        </div>
                    </div>
                </div>
            </fieldset>
        </form>
    </section>
    );
};

export default AddService;