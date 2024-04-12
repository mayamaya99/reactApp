import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class EditorTable extends Component {
    state = {
        editorState: EditorState.createEmpty(),
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    render() {
        const { editorState } = this.state;
        return (
            <div>
                <Editor
                    editorState={editorState}
                    onEditorStateChange={this.onEditorStateChange}
                    placeholder='Type here...'
                    toolbar={{
                        options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'remove', 'history'],
                        inline: {
                            options: ['bold', 'italic', 'underline', 'strikethrough']
                        }
                    }}
                />
                <br></br>
                <br></br>
                <Form.Group>
                    <Form.Label><strong>HTML Converter</strong></Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={10}
                        disabled
                        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))} />
                </Form.Group>
            </div>
        )
    }
}

export default EditorTable;