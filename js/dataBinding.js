
import Ractive from 'ractive';

export default (target, template, data) => {
    Ractive.Ractive({
        target: target,
        template: template,
        data: { dataTab: data }
    });
 }