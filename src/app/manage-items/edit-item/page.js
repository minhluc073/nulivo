"use client";
import Layout from "@/components/layout/Layout"
import LayoutAdmin from "@/components/layout/LayoutAdmin"
import Link from "next/link";
import Select from "react-select";
import { useId } from "react";
import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';


const selectCode = [
    {
      value: "v1",
      label: "Z-1",
    },
    {
      value: "v2",
      label: "Z-2",
    },
    {
      value: "v3",
      label: "Z-3",
    },
    {
      value: "v4",
      label: "Z-4",
    },
  ];


  const selectCategories = [
    {
      id:1,
      label: "Office",
    },
    {
        id:2,
        label: "Technology",
    },
    {
      id: 3,
      label: "Interior Design",
    },
    {
      id: 4,
      label: "Industrial",
    },
  ];

  const selectSoftware = [
    {
      id:1,
      label: "Photoshop",
    },
    {
        id:2,
        label: "illustrator",
    },
    {
      id: 3,
      label: "PowerPoint",
    },
    {
      id: 4,
      label: "Keynote",
    },
    {
        id: 5,
        label: "Google Slides",
      },
  ];


  const colorStyles = {
    control: (styles) => ({
    ...styles,
    backgroundColor: "transparent",
    borderColor: "#EFEFEF",
    borderRadius: "999px",
    height: "50px",
    boxShadow: "none",
    ":hover": {
        borderColor: "#EFEFEF",
    },
    }),
    option: (styles) => ({
    ...styles,
    backgroundColor: "transparent",
    transition: "all 0.3s ease-out 0s",
    ":hover": {
        backgroundColor: "transparent",
        color: "#450d87",
    },
    ":active": {
        backgroundColor: "transparent",
    },
    padding: "6px",
    color: "#303538",
    cursor: "pointer",
    }),

    menu: (base) => ({
    ...base,
    padding: "0px",
    borderRadius: "14px",
    width: "100%",
    border: "1px solid #EFEFEF",
    backgroundColor: "#fff",
    boxShadow: "none",
    }),
    placeholder: (defaultStyles) => {
        return {
            ...defaultStyles,
            paddingLeft: "12px",
            color: '#303538',
        }
    }
};


export default function EditItem(){
    const editorRef = useRef(null);

    return (
        <>
            <Layout loggedIn>
                <div className="flat-breadcrumb">
                    <div className="container">
                        <div className="breadcrumb">
                            <Link className="item" href="/">
                                Home
                            </Link>
                            <Link className="item" href="#">
                                Item
                            </Link>
                        </div>
                    </div>
                </div>
                <LayoutAdmin>
                    <form>
                        <div className="box">
                            <div className="h7 title">Download</div>
                            <fieldset className="sub-box">
                                <label className="label">Select Type</label>
                                <Select
                                    instanceId="code"
                                    className="react-select"
                                    placeholder="Code"
                                    options={selectCode}
                                    isSearchable={false}
                                    styles={colorStyles}
                                    formatOptionLabel={(selectCode) => (
                                        <div className="react-select-option">
                                        <p>{selectCode.label}</p>
                                        </div>
                                    )}
                                />
                            </fieldset>
                        </div>
                        <div className="box">
                            <div className="h9 title-v2">Name & Description</div>
                            <fieldset className="sub-box">
                                <label className="label">Name</label>
                                <input className="ip-fill" placeholder="Your name" required/>
                            </fieldset>
                            <fieldset className="sub-box">
                                <label className="label mb-10">Short Description</label>
                                <textarea placeholder="Display up to 500 words" className="textarea-3"></textarea>
                            </fieldset>
                            <fieldset className="sub-box">
                                <label className="label mb-10">Description</label>
                                <Editor
                                    apiKey='gqluato3jy9dy85ol1bczcsc0ft5rakaob2hxed9u2yqub2l'
                                    onInit={(_evt, editor) => editorRef.current = editor}
                                    init={{
                                    height: 150,
                                    menubar: false,
                                    plugins: [
                                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                        'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                                    ],
                                    toolbar: 'undo redo | blocks | ' +
                                        'bold italic forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify | bullist numlist outdent indent | ' +
                                        'removeformat | help',
                                    content_style: 'body { font-family:Inter,sans-serif; font-size:14px;line-height: 19.6px; margin:0px 10px; }' +'p {margin:0px}'
                                    }}
                                />
                            </fieldset>
                        </div>
                        <div className="box">
                            <div className="h9 title-v2">Category & Attribute</div>
                            <fieldset className="sub-box">
                                <label className="label">Category</label>
                                <Select
                                    instanceId="category"
                                    className="react-select"
                                    placeholder="3D Models"
                                    options={selectCategories}
                                    isSearchable={false}
                                    styles={colorStyles}
                                    formatOptionLabel={(selectCategories) => (
                                        <div className="react-select-option">
                                        <p>{selectCategories.label}</p>
                                        </div>
                                    )}
                                />
                            </fieldset>
                            <fieldset className="sub-box">
                                <label className="label">Software</label>
                                <Select
                                    instanceId="software"
                                    className="react-select"
                                    placeholder="3D Models"
                                    options={selectSoftware}
                                    isSearchable={false}
                                    styles={colorStyles}
                                    formatOptionLabel={(selectSoftware) => (
                                        <div className="react-select-option">
                                        <p>{selectSoftware.label}</p>
                                        </div>
                                    )}
                                />
                            </fieldset>
                            <fieldset className="sub-box">
                                <label className="label">Pixel Dimensions</label>
                                <input className="ip-fill" required/>
                                <p className="text-5 text-sub">Image dimensions in Pixels for screen-based items. E.g. 1920x1080, 80x80</p>
                            </fieldset>
                            <div className="sub-box">
                                <label className="label">Files Included</label>
                                <input className="ip-fill" required/>
                                <p className="text-5 text-sub">( separated by commas. e.g. PSD, PNG, PPTX... )</p>
                                <div className="list-check-file">
                                    <div className="d-flex gap-8 align-items-center item">
                                        <input type="checkbox" id="cb-1" className="tf-check style-2"/>
                                        <label htmlFor="cb-1" className="flex-grown-1">Future Update?</label>
                                    </div>
                                    <div className="d-flex gap-8 align-items-center item">
                                        <input type="checkbox" id="cb-2" className="tf-check style-2" defaultChecked/>
                                        <label htmlFor="cb-2" className="flex-grown-1">Layered</label>
                                    </div>
                                    <div className="d-flex gap-8 align-items-center item">
                                        <input type="checkbox" id="cb-3" className="tf-check style-2" defaultChecked/>
                                        <label htmlFor="cb-3" className="flex-grown-1">Support Item?</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="h9 title-v2">Tag</div>
                            <fieldset>
                                <label className="label">Tags</label>
                                <input className="ip-fill" required/>
                                <p className="text-5 text-sub">( separated by commas. e.g. business card, red, professional, pptx, creative.... )</p>
                            </fieldset>
                        </div>
                        <div className="box">
                            <div className="h9 title-v2">Item type</div>
                            <div className="d-flex gap-10">
                                <div className="tag-check">
                                    <span className="icon icon-check"></span>
                                    <span className="text">Free</span>
                                </div>
                                <div className="tag-check active">
                                    <span className="icon icon-check"></span>
                                    <span className="text">Premium</span>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="h9 title-v2">Files</div>
                            <div className="group-file-upload">
                                <div className="file-upload-item">
                                    <div className="label">Image Preview</div>
                                    <div className="box-upload-item">
                                        <div className="box-btn-file">
                                            <button className="tf-btn btn-icon">
                                                <span className="icon">
                                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.62516 8.64667C3.7185 8.6325 3.81433 8.625 3.91183 8.625H17.0885C17.186 8.625 17.2818 8.6325 17.3752 8.64667M3.62516 8.64667C3.13747 8.72219 2.69921 8.98695 2.40546 9.38351C2.1117 9.78007 1.98614 10.2765 2.056 10.765L2.77016 15.765C2.83395 16.2118 3.05674 16.6206 3.39765 16.9163C3.73855 17.2121 4.17469 17.3749 4.626 17.375H16.3752C16.8265 17.3749 17.2626 17.2121 17.6035 16.9163C17.9444 16.6206 18.1672 16.2118 18.231 15.765L18.9452 10.765C19.015 10.2765 18.8895 9.78007 18.5957 9.38351C18.302 8.98695 17.8629 8.72219 17.3752 8.64667M3.62516 8.64667L3.626 5.5C3.626 5.00286 3.82343 4.52608 4.17488 4.17447C4.52633 3.82286 5.00303 3.62522 5.50016 3.625H8.73266C9.06407 3.62529 9.3818 3.75718 9.616 3.99167L11.3843 5.75833C11.6185 5.99282 11.9363 6.12471 12.2677 6.125H15.5002C15.9974 6.125 16.4744 6.32254 16.826 6.67417C17.1776 7.02581 17.3752 7.50272 17.3752 8V8.64667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </span>
                                                <span className="text">Browse</span>
                                            </button>
                                            <input type="file"/>
                                        </div>
                                        <p className="text_black-1 fw-medium">or drag & drop your file <br/> <span className="fw-normal text_grey-2">1200x800 Image Preview (JPG or PNG)</span></p>
                                    </div>                                   
                                </div>
                                <div className="file-upload-item">
                                    <div className="label">Preview Image Set (Multiple Images)</div>
                                    <div className="box-upload-item">
                                        <div className="box-btn-file">
                                            <button className="tf-btn btn-icon">
                                                <span className="icon">
                                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.62516 8.64667C3.7185 8.6325 3.81433 8.625 3.91183 8.625H17.0885C17.186 8.625 17.2818 8.6325 17.3752 8.64667M3.62516 8.64667C3.13747 8.72219 2.69921 8.98695 2.40546 9.38351C2.1117 9.78007 1.98614 10.2765 2.056 10.765L2.77016 15.765C2.83395 16.2118 3.05674 16.6206 3.39765 16.9163C3.73855 17.2121 4.17469 17.3749 4.626 17.375H16.3752C16.8265 17.3749 17.2626 17.2121 17.6035 16.9163C17.9444 16.6206 18.1672 16.2118 18.231 15.765L18.9452 10.765C19.015 10.2765 18.8895 9.78007 18.5957 9.38351C18.302 8.98695 17.8629 8.72219 17.3752 8.64667M3.62516 8.64667L3.626 5.5C3.626 5.00286 3.82343 4.52608 4.17488 4.17447C4.52633 3.82286 5.00303 3.62522 5.50016 3.625H8.73266C9.06407 3.62529 9.3818 3.75718 9.616 3.99167L11.3843 5.75833C11.6185 5.99282 11.9363 6.12471 12.2677 6.125H15.5002C15.9974 6.125 16.4744 6.32254 16.826 6.67417C17.1776 7.02581 17.3752 7.50272 17.3752 8V8.64667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </span>
                                                <span className="text">Browse</span>
                                            </button>
                                            <input type="file"/>
                                        </div>
                                        <p className="text_black-1 fw-medium">or drag & drop your file <br/> <span className="fw-normal text_grey-2">1200x800 Image Preview (JPG or PNG)</span></p>
                                    </div>                                   
                                </div>
                                <div className="file-upload-item">
                                    <div className="label">Main File</div>
                                    <div className="box-upload-item">
                                        <div className="box-btn-file">
                                            <button className="tf-btn btn-icon">
                                                <span className="icon">
                                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.62516 8.64667C3.7185 8.6325 3.81433 8.625 3.91183 8.625H17.0885C17.186 8.625 17.2818 8.6325 17.3752 8.64667M3.62516 8.64667C3.13747 8.72219 2.69921 8.98695 2.40546 9.38351C2.1117 9.78007 1.98614 10.2765 2.056 10.765L2.77016 15.765C2.83395 16.2118 3.05674 16.6206 3.39765 16.9163C3.73855 17.2121 4.17469 17.3749 4.626 17.375H16.3752C16.8265 17.3749 17.2626 17.2121 17.6035 16.9163C17.9444 16.6206 18.1672 16.2118 18.231 15.765L18.9452 10.765C19.015 10.2765 18.8895 9.78007 18.5957 9.38351C18.302 8.98695 17.8629 8.72219 17.3752 8.64667M3.62516 8.64667L3.626 5.5C3.626 5.00286 3.82343 4.52608 4.17488 4.17447C4.52633 3.82286 5.00303 3.62522 5.50016 3.625H8.73266C9.06407 3.62529 9.3818 3.75718 9.616 3.99167L11.3843 5.75833C11.6185 5.99282 11.9363 6.12471 12.2677 6.125H15.5002C15.9974 6.125 16.4744 6.32254 16.826 6.67417C17.1776 7.02581 17.3752 7.50272 17.3752 8V8.64667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </span>
                                                <span className="text">Browse</span>
                                            </button>
                                            <input type="file"/>
                                        </div>
                                        <p className="text_black-1 fw-medium">or drag & drop your file <br/> <span className="fw-normal text_grey-2">1200x800 Image Preview (JPG or PNG)</span></p>
                                    </div>                                   
                                </div>
                                <div className="file-upload-item">
                                    <div className="label">Optional Video Preview</div>
                                    <div className="box-upload-item">
                                        <div className="box-btn-file">
                                            <button className="tf-btn btn-icon">
                                                <span className="icon">
                                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.62516 8.64667C3.7185 8.6325 3.81433 8.625 3.91183 8.625H17.0885C17.186 8.625 17.2818 8.6325 17.3752 8.64667M3.62516 8.64667C3.13747 8.72219 2.69921 8.98695 2.40546 9.38351C2.1117 9.78007 1.98614 10.2765 2.056 10.765L2.77016 15.765C2.83395 16.2118 3.05674 16.6206 3.39765 16.9163C3.73855 17.2121 4.17469 17.3749 4.626 17.375H16.3752C16.8265 17.3749 17.2626 17.2121 17.6035 16.9163C17.9444 16.6206 18.1672 16.2118 18.231 15.765L18.9452 10.765C19.015 10.2765 18.8895 9.78007 18.5957 9.38351C18.302 8.98695 17.8629 8.72219 17.3752 8.64667M3.62516 8.64667L3.626 5.5C3.626 5.00286 3.82343 4.52608 4.17488 4.17447C4.52633 3.82286 5.00303 3.62522 5.50016 3.625H8.73266C9.06407 3.62529 9.3818 3.75718 9.616 3.99167L11.3843 5.75833C11.6185 5.99282 11.9363 6.12471 12.2677 6.125H15.5002C15.9974 6.125 16.4744 6.32254 16.826 6.67417C17.1776 7.02581 17.3752 7.50272 17.3752 8V8.64667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </span>
                                                <span className="text">Browse</span>
                                            </button>
                                            <input type="file"/>
                                        </div>
                                        <p className="text_black-1 fw-medium">or drag & drop your file <br/> <span className="fw-normal text_grey-2">1200x800 Image Preview (JPG or PNG)</span></p>
                                    </div>                                   
                                </div>
                            </div>  
                        </div>
                        <div className="box d-flex gap-20 justify-content-center flex-wrap">
                            <Link className="tf-btn width-2 btn-line-primary" href="/manage-items">Save</Link>
                            <Link className="tf-btn width-2 btn-line-primary" href="#">Activate</Link>
                        </div>
                    </form>
                </LayoutAdmin>
            </Layout>
        </>
    )
 
}