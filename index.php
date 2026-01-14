<?php  
$pageTitle = 'Toolhost - Free Online Tools';  
include 'includes/header.php';  
  
$tools = [  
    [  
        'name' => 'Dailymotion Embed',  
        'image' => 'assets/images/dailymotion.png',  
        'url' => 'dailymotion-embed'  
    ],  
    [  
        'name' => 'Google Drive Embed',  
        'image' => 'assets/images/gdrive.png',  
        'url' => 'gdrive-embed'  
    ],  
    [  
        'name' => 'YouTube Embed',  
        'image' => 'assets/images/youtube.png',  
        'url' => 'youtube-embed'  
    ],  
    [  
        'name' => 'Image Converter',  
        'image' => 'assets/images/image-converter.png',  
        'url' => 'image-converter'  
    ],  
    [  
        'name' => 'image Compressor',  
        'image' => 'assets/images/image-compress.png',  
        'url' => 'image-compress'  
    ],  
    [  
        'name' => 'Canonical Tag Checker',  
        'image' => 'assets/images/canonical-tag-checker.png',  
        'url' => 'canonical-tag-checker'  
    ],  
    [  
        'name' => 'Canonical Tag Generator',  
        'image' => 'assets/images/canonical-tag-generator.png',  
        'url' => 'canonical-tag-generator'  
    ],
    [  
        'name' => 'Base64 Decoder',  
        'image' => 'assets/images/base64-decoder.png',  
        'url' => 'base64-decoder'  
    ],  
    [  
        'name' => 'Base64 Encoder',  
        'image' => 'assets/images/base64-encoder.png',  
        'url' => 'base64-encoder'  
    ] 
];  
?>  
  
<main>  
    <div class="page-header">  
        <h1>Free Online Tools</h1>  
        <p>Simple, fast, and free tools for everyday tasks</p>  
    </div>  
      
    <div class="tools-grid">  
        <?php foreach ($tools as $tool): ?>  
            <a href="<?php echo $tool['url']; ?>" class="tool-card">  
                <div class="tool-image-wrapper">
                    <img src="<?php echo $tool['image']; ?>" alt="<?php echo $tool['name']; ?>" class="tool-image">
                </div>
                <h3 class="tool-name"><?php echo $tool['name']; ?></h3>  
            </a>  
        <?php endforeach; ?>  
    </div>  
</main>
  
<style>  
    main {  
        padding: 30px 15px;  
        min-height: calc(100vh - 200px);  
    }  
      
    .page-header {  
        text-align: center;  
        margin-bottom: 40px;  
    }  
      
    .page-header h1 {  
        font-size: 28px;  
        margin-bottom: 10px;  
        color: var(--text-color);  
    }  
      
    .page-header p {  
        font-size: 15px;  
        color: var(--text-color);  
        opacity: 0.7;  
    }  
      
    .tools-grid {  
        display: grid;  
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));  
        gap: 20px;  
        max-width: 1200px;  
        margin: 0 auto;  
    }  
      
    .tool-card {  
        text-decoration: none;  
        color: var(--text-color);  
        display: flex;  
        flex-direction: column;  
        gap: 12px;  
    }  
    
    .tool-image-wrapper {
        background: #f5f5f5;  
        border: 1px solid var(--border-color);  
        border-radius: 12px;  
        overflow: hidden;
        aspect-ratio: 1 / 1;  
        transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;  
        position: relative;
    }
      
    .tool-image {  
        width: 100%;  
        height: 100%;  
        object-fit: cover;  
        transition: transform 0.3s;  
    }  
      
    .tool-name {  
        font-size: 14px;  
        font-weight: 600;  
        text-align: center;  
        line-height: 1.3;  
        margin: 0;  
        padding: 0 5px;
    }  
      
    @media (max-width: 768px) {  
        .tools-grid {  
            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));  
            gap: 15px;  
        }  
          
        .tool-name {  
            font-size: 13px;  
        }  
    }  
      
    @media (max-width: 480px) {  
        .tools-grid {  
                        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));  

            gap: 12px;  
        }  
          
        .tool-name {  
            font-size: 12px;  
        }  
    }  
</style>
  
<?php include 'includes/footer.php'; ?>  