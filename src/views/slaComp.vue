// eslint-disable-next-line vue/multi-word-component-names
<template>
<div id="sla" class="col-md-12 text-justify">
    <h1>Acuerdo de nivel de servicio informático de DRPMX</h1>
    <p></p>
    <p>Última actualización: 17 de marzo del 2022</p>
    <p></p>
    <p>Este Acuerdo de nivel de servicio de DRPMX Compute (este "SLA") es una política que
        rige el uso de los Servicios incluidos (enumerados a continuación) y se aplica por
        separado a cada cuenta que utiliza los Servicios incluidos. En caso de conflicto
        entre los términos de este SLA y los términos del Acuerdo de cliente de DRPMX u otro
        acuerdo con nosotros que rija el uso de nuestros Servicios (el "Acuerdo"), se aplicarán
        los términos y condiciones de este SLA, pero solo para el alcance de tal conflicto.
        Los términos en mayúscula utilizados aquí pero no definidos aquí tendrán los
        significados establecidos en el Acuerdo.</p>
    <p></p>
    <h3><strong>Servicios incluidos:</strong></h3>
    <ul>
        <li>Infrastructure as a Service (IaaS)</li>
        <li>Backup as a Service (BaaS)</li>
        <li>Disaster Recovery as a Service (DRaaS)</li>
        <li>Microsoft Protection as a Service (MPaaS)</li>
    </ul>
    <p></p>
    <h3><strong>SLA</strong></h3>
    <p>Para los servicios incluidos en todas las instancias o tareas en ejecución implementadas,
        DRPMX hará todos los esfuerzos comercialmente razonables para que cada Servicio incluido
        esté disponible con un Porcentaje de tiempo de actividad mensual de al menos el 99.9 %,
        de manera mensual. En caso de que alguno de los Servicios incluidos no cumpla con el SLA,
        será elegible para recibir un Crédito de servicio como se describe a continuación.</p>
    <p></p>
    <table border="0" cellpadding="0" cellspacing="0" style="width:579px;" width="579">
        <tbody>
            <tr>
                <td nowrap="nowrap" style="width:348px;height:47px;">
                <p><strong>Porcentaje de tiempo de actividad mensual</strong></p>
                </td>
                <td nowrap="nowrap" style="width:231px;height:47px;">
                <p><strong>Porcentaje de crédito de servicio</strong></p>
                </td>
            </tr>
            <tr>
                <td nowrap="nowrap" style="width:348px;height:47px;">
                <p>Inferior al 99.9% pero igual o superior al 99.0%</p>
                </td>
                <td nowrap="nowrap" style="width:231px;height:47px;">
                <p>10%</p>
                </td>
            </tr>
            <tr>
                <td nowrap="nowrap" style="width:348px;height:47px;">
                <p>Inferior al 99.0% pero igual o superior al 95.0%</p>
                </td>
                <td nowrap="nowrap" style="width:231px;height:47px;">
                <p>30%</p>
                </td>
            </tr>
            <tr>
                <td nowrap="nowrap" style="width:348px;height:47px;">
                <p>Menos del 95.0%</p>
                </td>
                <td nowrap="nowrap" style="width:231px;height:47px;">
                <p>100%</p>
                </td>
            </tr>
        </tbody>
    </table>
    <p></p>
    <h3><strong>Créditos SLA</strong></h3>
    <p>Los Créditos de servicio se calculan como un porcentaje de la factura mensual
        (excluidos los pagos únicos, como los pagos por servicios profesionales) por cada
        Servicio contratado de manera individual, el cual DRPMX no cumplió con el SLA.</p>
    <p></p>
    <p>Aplicaremos los Créditos de servicio solo contra pagos futuros por el Servicio incluido
        aplicable que de lo contrario usted adeudaría. Los Créditos de servicio no le darán derecho
        a ningún reembolso u otro pago de DRPMX. Se aplicará y se emitirá un Crédito de servicio
        solo si el monto del crédito para el ciclo de facturación mensual aplicable es superior
        a un dólar ($1 USD). Los Créditos de servicio no se pueden transferir ni aplicar a ninguna
        otra cuenta u organización.</p>
    <p></p>
    <h3><strong>Solicitud de Crédito y Procedimientos de Pago</strong></h3>
    <p>Para recibir un Crédito de servicio, debe abrir un caso en el portal de soporte de DRPMX <a href="https://support.drpmexico.com">https://support.drpmexico.com</a>. Solo puede enviar un reclamo bajo el SLA, ya que estos reclamos no se pueden combinar ni apilar. Su solicitud de crédito debe ser recibida por nosotros al final del segundo ciclo de facturación después del cual ocurrió el incidente y debe incluir la información especificada a continuación.</p>
    <ul>
        <li>Servicio contratado</li>
        <li>Fecha y hora del inicio del incidente</li>
        <li>Fecha y hora del fin del incidente</li>
        <li>Numero del incidente reportado en el portal de soporte de DRPMX</li>
        <li>Descripción detallada del incumplimiento del SLA.</li>
    </ul>
    <p></p>
    <p>Si confirmamos que un reclamo bajo el SLA de nivel de región o de instancia es válido,
        le emitiremos un crédito de servicio dentro de un ciclo de facturación posterior al mes
        en que confirmemos su solicitud.</p>
    <p></p>
    <p>Si no proporciona la información solicitada y otra información requerida anteriormente, lo
        descalificará para recibir un Crédito de servicio. A menos que se indique lo contrario en
        el Acuerdo, este SLA establece sus recursos únicos y exclusivos, y las obligaciones únicas y
        exclusivas de DRPMX, por cualquier falta de disponibilidad, incumplimiento u otra falla por
        nuestra parte en la prestación de los Servicios incluidos.</p>
    <p></p>
    <h3><strong>Exclusiones del SLA de DRPMX</strong></h3>
    <p></p>
    <p>El SLA, no se aplican a ninguna falta de disponibilidad, suspensión o terminación de un
        Servicio incluido, ni a ningún otro problema de rendimiento del Servicio incluido, directa o
        indirectamente: (i) causado por factores fuera de nuestro control, incluido cualquier evento
        de fuerza mayor o acceso a Internet o problemas relacionados más allá del punto de
        demarcación del Servicio Incluido aplicable; (ii) que resulten de cualquier acción o
        inacción de usted o de un tercero, incluida la falta de reconocimiento de un volumen
        de recuperación o la falta de respuesta a inquietudes sobre la salud de los recursos;
        (iii) que resulten de su equipo, software u otra tecnología y/o equipo, software u otra
        tecnología de terceros (que no sean equipos de terceros bajo nuestro control directo);
        o (iv) que surja de nuestra suspensión o rescisión de su derecho a utilizar el Servicio
        incluido aplicable de conformidad con el Acuerdo (colectivamente, las "Exclusiones
        del SLA de DRPMX Compute"). Si la disponibilidad se ve afectada por factores distintos
        a los utilizados en nuestro cálculo del Porcentaje de tiempo de actividad mensual,
        podemos emitir un Crédito de servicio considerando dichos factores a nuestra discreción.</p>
    <!-- <h2> </h2> -->
    <h3><strong>Definiciones de SLA</strong></h3>
    <ul>
        <li>"Zona de disponibilidad" y "AZ" significan una ubicación aislada dentro de una región
            de DRPMX identificada por un identificador de letras que sigue al código de región de
            DRPMX (por ejemplo, MXGDL o MXMTY).</li>
        <li>El “Porcentaje de Uptime Mensual” se calcula restando al 100% el porcentaje de minutos
            durante el mes en que alguno de los Servicios Incluidos, según corresponda, estuvo en
            estado de Indisponibilidad.</li>
        <li>Un "Crédito de servicio" es un crédito en dólares, calculado como se establece
            anteriormente, que podemos devolver a una cuenta elegible.</li>
        <li>"No disponible" e "Indisponibilidad" significan: Para el SLA aplicable a DRPMX,
            cuando todas sus instancias en ejecución o tareas en ejecución, según corresponda,
            no tienen conectividad externa al mismo tiempo.</li>
    </ul>
</div>
</template>

<style lang="scss">
    #sla{
        font-family: "Century Gothic", sans-serif;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555555;
            font-weight: 400
    }
</style>
