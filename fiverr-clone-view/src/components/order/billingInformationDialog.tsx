import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { ChangeEvent, FormEvent, useState } from "react";
import newRequest from "@/utils/newRequest";
import { useParams } from "react-router-dom";
import { toast } from "sonner";


interface FormData {
    fullName: string;
    companyName: string;
    stateRegion: string;
    address: string;
    city: string;
    postalCode: string;
    error: string | null;
}


const BillingInformationDialog = () => {




    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        companyName: '',
        stateRegion: '',
        address: '',
        city: '',
        postalCode: '',
        error: null
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const { id } = useParams();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        if (!formData.fullName || !formData.companyName || !formData.stateRegion || !formData.address || !formData.city || !formData.postalCode) {
            setFormData({
                ...formData,
                error: 'All fields are required'
            });
            return;
        }
        setFormData({
            ...formData,
            error: ''
        });
        try {
            const response = await newRequest.post(`/users/billingInformation/${id}`, formData).
                then((res) => { return res.data }).
                catch((err) => { return err });
            console.log('Response:', response.data);
            toast.success('Billing information added successfully, please refresh page to see changes.');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline" className="rounded-[2px] hover:bg-gray-100">Add Details</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] lg:max-h-[500px] xl:max-h-[1200px]  overflow-y-scroll bg-white">
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>

                    <form className="space-y-4" onSubmit={(e) => {
                        handleSubmit(e)
                    }}>
                        {formData.error && <p className="text-red-500">{formData.error}</p>}
                        <div className="space-y-1">
                            <label htmlFor="name" className="text-right">
                                Full name
                            </label>
                            <Input
                                id="fullName"
                                name="fullName"
                                placeholder="John Doe"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="col-span-3"
                            />
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="companyName" className="text-right">
                                Company name
                            </label>
                            <Input
                                id="companyName"
                                name="companyName"
                                placeholder="John Doe HQ"
                                value={formData.companyName}
                                onChange={handleChange}
                                className="col-span-3"
                            />
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="stateRegion" className="text-right">
                                State/Region
                            </label>
                            <Input
                                id="State/Region"
                                name="stateRegion"
                                placeholder="Egypt"
                                value={formData.stateRegion}
                                onChange={handleChange}
                                className="col-span-3"
                            />
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="name" className="text-right">
                                Address
                            </label>
                            <Input
                                id="Address"
                                name="address"
                                placeholder="John Doe Street"
                                value={formData.address}
                                onChange={handleChange}
                                className="col-span-3"
                            />
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="name" className="text-right">
                                City
                            </label>
                            <Input
                                id="city"
                                name="city"
                                placeholder="Giza"
                                value={formData.city}
                                onChange={handleChange}
                                className="col-span-3"
                            />
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="name" className="text-right">
                                Postal code
                            </label>
                            <Input
                                name="postalCode"
                                placeholder="100023"
                                value={formData.postalCode}
                                onChange={handleChange}
                                className="col-span-3"
                            />
                        </div>
                        <DialogFooter>
                            <Button type="submit" className="bg-black hover:bg-gray-900 text-white">Save changes</Button>
                            <DialogClose aria-label="Close">
                                Cancel
                            </DialogClose>
                        </DialogFooter>
                    </form>

                </DialogContent>
            </Dialog>
        </div>
    )
}

export default BillingInformationDialog