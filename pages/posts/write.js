import { useRef} from 'react';
import { Editor } from '@tinymce/tinymce-react';

const WritePage = () => {
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };
    return (
        <>
            <select placeholder={"카테고리"}>
                <option>javascript</option>
            </select>
            <br></br>

            <input placeholder={"제목"}></input>


            <Editor
                apiKey='wpjs3cehtckttfq8b5xatgp8f7awyr7or3fekq6u818ks4ub'
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue="<p>This is the initial content of the editor.</p>"
                init={{
                    height: 700,
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
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:20px }'
                }}
            />
            <button onClick={log}>작성</button>
        </>
    );
}

export default WritePage
