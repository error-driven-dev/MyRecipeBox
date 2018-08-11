<!--ADDED A VALUE INTO A FORM THAT CONTAINS A REFERENCE-->
shortcuts.js:54 Uncaught ReferenceError: code is not defined
    at HTMLDocument.func (shortcuts.js:54)
func @ shortcuts.js:54

*****SOLUTION: Add Forms Module to app.Module file.
        import { FormsModule} from '@angular/forms';
        
    