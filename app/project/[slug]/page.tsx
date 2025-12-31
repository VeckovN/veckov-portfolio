interface ProjectPageProps {
    params: Promise<{ slug: string }>
}

const ProjectPage = async({params}: ProjectPageProps) => {
    const {slug} = await params;

    return (
        <div className="min-h-screen bg-about text-white">
            <h1 className='text-xl font-bold'>
                Project: {slug}
            </h1>

            <p className="mt-4 opacity-70 text-md">
                Project details coming soon...
            </p>
        </div>
    )
}

export default ProjectPage;