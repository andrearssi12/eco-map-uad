import { Button } from "@heroui/react";
import { Head } from "@inertiajs/react";

const Test = () => {
    return (
        <>
            <Head title="Test Page" />
            <div>
                <h1>Test Page</h1>
                <p>This is a test page to verify the setup.</p>
                <Button color="primary">
                    Click Me
                </Button>
            </div>
        </>

    );
}

export default Test;