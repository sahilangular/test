import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const courseApi = createApi({
    reducerPath: "course",
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:8080/api/v1/course/'}),
    endpoints:(builder)=>({
        course:builder.mutation({
            query:(formdata)=>({
                url:'new',
                method:'POST',
                body:formdata
            })
        })
    })
})

export const {useCourseMutation} = courseApi